import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAlert } from "../context/useContext";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  useEffect(() => {
    const handleOauthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        console.error("Session creation failed:", error);
        navigate("/login?error=auth_failed");
        showAlert("Authentication error. Please try again", "error");
        return;
      }

      navigate("/dashboard");
    };
    handleOauthCallback();
  }, [navigate, showAlert]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;
