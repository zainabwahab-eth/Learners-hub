import { ID } from "appwrite";
import { useState, useEffect } from "react";
import { account } from "../lib/appwrite";
import { AuthContext } from "./useContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //Check if user is already loggedIn
  const checkUserStatus = async () => {
    setLoading(true);
    try {
      const currentUser = await account.get();
      setUser(currentUser);
      setLoading(false);
    } catch (err) {
      console.log("No active user", err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  //Signup
  const signup = async (email, password, name) => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      console.log("signup", user);
      return login(email, password);
    } catch (err) {
      console.error("Signup err", err.message, err);
      throw new Error(err.message);
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
      throw new Error(err.message);
    }
  };

  //Logout
  const logout = async () => {
    try {
      await account.deleteSession({
        sessionId: "current",
      });
      setUser(null);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  console.log(user);

  const value = { user, loading, checkUserStatus, signup, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
