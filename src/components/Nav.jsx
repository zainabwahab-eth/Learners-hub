import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useContext";
import logo from "../assets/logo.svg";
import { useState } from "react";
import {
  Link2,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Folder,
  Globe,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Home,
  Compass,
  Menu,
  LogOut,
  MoreVertical,
  Calendar,
  X,
  RefreshCw,
  Trash2,
} from "lucide-react";

const Nav = ({ type = "app" }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  //   const user = useAuth();
  return (
    <nav className="relative">
      <div className="bg-white shadow-sm px-4 lg:px-10 md:px-6 mx-auto py-4 flex justify-around items-center border-b border-gray-200">
        <div className="flex justify-between items-center gap-2">
          <img src={logo} alt="Logo" className="w-6 h-6" />
          <div className="text-l font-semibold">LinkVault</div>
        </div>
        {/* Logo */}

        {type === "app" ? (
          <>
            {/* Hamburger Icon (Mobile Only) */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              {isMobileNavOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            {/* Middle - Nav Links */}
            <div className="hidden md:flex lg:flex gap-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center justify-center space-x-2 text-sm text-gray-700 gap-2 hover:text-purple-700 transition-colors ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                <Home className="w-5 h-5" />
                Home
              </NavLink>

              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                  `flex items-center justify-center space-x-2 text-sm text-gray-700 gap-2 hover:text-purple-700 transition-colors ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                <Bookmark className="w-5 h-5" />
                Bookmarks
              </NavLink>

              <NavLink
                to="/community"
                className={({ isActive }) =>
                  `flex items-center justify-center space-x-2 text-sm text-gray-700 gap-2 hover:text-purple-700 transition-colors ${
                    isActive ? "text-primary font-semibold" : ""
                  }`
                }
              >
                <Compass className="w-5 h-5" />
                Explore
              </NavLink>
            </div>

            {/* Right side */}
            <div className="hidden lg:flex md:flex items-center gap-4">
              <>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm">{user?.name.split(" ")[0]}</span>
                  {isProfileOpen ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </button>
              </>
            </div>
          </>
        ) : (
          // Landing Nav: only login/signup
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="px-6 py-2 bg-white text-sm font-medium text-primary rounded-full border- border-primary"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-6 py-2 bg-primary text-sm font-medium text-white rounded-full hover:bg-purple-700 transition-colors duration-200"
            >
              Signup
            </a>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileNavOpen && (
        <div className="md:hidden w-full bg-gray-50 shadow-lg shadow-gray-200 rounded-xl border-gray-200 flex flex-col absolute border-t gap-2 space-y-4 py-3 px-6 mt-2">
          <NavLink
            to="/dashboard"
            onClick={() => setIsMobileNavOpen(false)}
            className="flex items-center px-4 gap-2 text-gray-700 hover:text-purple-700"
          >
            <Home className="w-5 h-5" />
            Home
          </NavLink>
          <NavLink
            to="/bookmarks"
            onClick={() => setIsMobileNavOpen(false)}
            className="flex items-center px-4 gap-2 text-gray-700 hover:text-purple-700"
          >
            <Bookmark className="w-5 h-5" />
            BookMark
          </NavLink>
          <NavLink
            to="/community"
            onClick={() => setIsMobileNavOpen(false)}
            className="flex items-center px-4 gap-2 text-gray-700 hover:text-purple-700"
          >
            <Compass className="w-5 h-5" />
            Explore
          </NavLink>
          <div className="border-1 border-gray-200"></div>

          <div className="flex gap-2 px-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{user?.name}</span>
              <span className="text-sm">{user?.email}</span>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center px-4 gap-2 text-red-700 hover:text-red-900"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      )}

      {/* Profile View */}
      {isProfileOpen && (
        <div className="bg-gray-50 w-3xs shadow-lg shadow-gray-200 rounded-xl border-gray-200 flex flex-col absolute right-25 space-y-4 py-4 px-3 mt-2">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{user?.name}</span>
              <span className="text-sm text-gray-500">{user?.email}</span>
            </div>
          </div>
          <div className="border-1 border-gray-200"></div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-700 text-sm hover:text-red-900"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
