import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { AuthContext } from "./useContext";
import LoadingPage from "../pages/Loading";

const normalizeUser = (supabaseUser) =>
  supabaseUser
    ? {
        id: supabaseUser.id,
        email: supabaseUser.email,
        name:
          supabaseUser.user_metadata?.name ??
          supabaseUser.user_metadata?.full_name ??
          supabaseUser.email,
      }
    : null;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Signup
  const signup = async (email, password, name) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) {
      console.error("Signup err", error.message);
      throw error;
    }
    return normalizeUser(data.user);
  };

  //Login
  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Login err", error.message);
      throw error;
    }
  };

  //Goggle Login / Signup
  const AuthWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) {
      console.error("Google auth err", error.message);
      throw error;
    }
  };

  //Logout
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error);
      throw error;
    }
    setUser(null);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(normalizeUser(data.session?.user ?? null));
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(normalizeUser(session?.user ?? null));
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    AuthWithGoogle,
    signup,
    login,
    logout,
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
