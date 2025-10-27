import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { account } from "../lib/appwrite";
import { useAuth } from "../context/useContext";
import { useAlert } from "../context/useContext";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { syncProfile } = useAuth();
  const { showAlert } = useAlert();

  useEffect(() => {
    const handleOauthCallback = async () => {
      const userId = searchParams.get("userId");
      const secret = searchParams.get("secret");

      if (userId && secret) {
        try {
          await account.createSession(userId, secret);
          const currentUser = await account.get();
          await syncProfile(currentUser);
          navigate("/dashboard");
        } catch (err) {
          console.error("Session creation failed:", err);
          navigate("/login?error=auth_failed");
          showAlert("Authentication error. Please try again", "error");
        }
      } else {
        console.error("Missing OAuth token parameters");
        navigate("/login?error=missing_params");
        showAlert("Authentication error. Please try again", "error");
      }
    };
    handleOauthCallback();
  }, [searchParams, navigate, syncProfile]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;
