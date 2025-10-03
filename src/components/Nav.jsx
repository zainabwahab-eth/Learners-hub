import { NavLink } from "react-router-dom";

const Nav = ({ type = "app", isLoggedIn = false, user }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {type === "app" ? (
        <>
          {/* Middle - Nav Links */}
          <div className="flex gap-6">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Bookmarks
            </NavLink>

            <NavLink
              to="/community"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              Community
            </NavLink>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md">
                  Login
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
                  Signup
                </button>
              </>
            ) : (
              <>
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span>{user?.name}</span>
                </span>
                <button className="px-3 py-1 border border-red-500 text-red-500 rounded-md">
                  Logout
                </button>
              </>
            )}
          </div>
        </>
      ) : (
        // Landing Nav: only login/signup
        <div className="flex items-center gap-4">
          <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md">
            Login
          </button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
            Signup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
