import { ID, Query } from "appwrite";
import { useState, useEffect } from "react";
import { account, tablesDB } from "../lib/appwrite";
import { AuthContext } from "./useContext";
import LoadingPage from "../pages/Loading";

export const AuthProvider = ({ children }) => {
  const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Check if user is already loggedIn
  const checkUserStatus = async () => {
    setLoading(true);
    try {
      const currentUser = await account.get();
      setUser(currentUser);
      setLoading(false);
      return currentUser;
    } catch (err) {
      console.error("No active user", err.message);
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  //Signup
  const signup = async (email, password, name) => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });

      await account.createEmailPasswordSession({
        email,
        password,
      });

      const currentUser = await account.get();
      setUser(currentUser);

      return currentUser;
    } catch (err) {
      console.error("Signup err", err.message, err);
      throw err;
    }
  };

  //Login
  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      await checkUserStatus();
    } catch (err) {
      console.error("Login err", err.message, err);
      throw err;
    }
  };

  //Goggle Login / Signup
  const AuthWithGoogle = async () => {
    const origin = window.location.origin;
    const successUrl = `${origin}/auth/callback`;
    const failureUrl = `${origin}/login`;
    account.createOAuth2Token("google", successUrl, failureUrl);
  };

  //Logout
  const logout = async () => {
    try {
      await account.deleteSession({
        sessionId: "current",
      });
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
      throw err;
    }
  };

  //Save user info after signup
  const saveUserProfile = async (userId, email, name) => {
    try {
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: "profiles",
        rowId: ID.unique(),
        data: {
          userId,
          email,
          name,
        },
      });
    } catch (err) {
      if (err.message.includes("already exists")) {
        console.log("Profile already exists, skipping...");
      } else {
        throw err;
      }
    }
  };

  const syncProfile = async (currentUser) => {
    try {
      const existing = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: "profiles",
        queries: [Query.equal("userId", currentUser.$id)],
      });

      if (existing.rows.length === 0) {
        await saveUserProfile(
          currentUser.$id,
          currentUser.email,
          currentUser.name || "Google User"
        );
      }

      setUser(currentUser);
    } catch (err) {
      console.err("Error syncing profile", err);
      throw err;
    }
  };

  useEffect(() => {
    const handleInitialLoad = async () => {
      const currentUser = await checkUserStatus();
      if (currentUser) {
        await syncProfile(currentUser);
      }
    };

    handleInitialLoad();
  }, []);

  const value = {
    user,
    loading,
    checkUserStatus,
    AuthWithGoogle,
    signup,
    login,
    logout,
    saveUserProfile,
    syncProfile,

    //68ff942a003df3d3735e
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <LoadingPage message="Checking User" />
      </div>
    );
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
