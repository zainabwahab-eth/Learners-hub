import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useContext";
import LoadingPage from "../pages/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <LoadingPage message="Checking User" />
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
