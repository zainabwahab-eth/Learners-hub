import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";
import Community from "./pages/Community";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import FolderDetails from "./pages/FolderDetails";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useAuth } from "./context/useContext";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={user ? <Navigate to="/dashboard" /> : <Landing />}
        />

        {/* auth */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/dashboard" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* FOlder details */}
        <Route path="/folder/:folderId" element={<FolderDetails />} />

        {/* Bookmarks */}
        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute>
              <Bookmarks />
            </ProtectedRoute>
          }
        />

        {/* Community */}
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
