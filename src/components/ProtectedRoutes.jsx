import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // While checking login status
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  // If no user, redirect to login
  if (!user) {
    console.log("protected route. Rerouting to login");
    return <Navigate to="/login" replace />;
  }

  // Otherwise show the protected page
  return children;
};

export default ProtectedRoute;
