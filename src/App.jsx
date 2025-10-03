import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Bookmarks from "./components/Bookmarks";
import Community from "./components/Community";
import Nav from "./components/Nav";

function App() {
  const fakeUser = { name: "Zainab" };
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <div>
              <Nav type="app" isLoggedIn={isLoggedIn} user={fakeUser} />
              <Dashboard />
            </div>
          }
        />

        {/* Bookmarks */}
        <Route
          path="/bookmarks"
          element={
            <div>
              <Nav type="app" isLoggedIn={isLoggedIn} user={fakeUser} />
              <Bookmarks />
            </div>
          }
        />

        {/* Community */}
        <Route
          path="/community"
          element={
            <div>
              <Nav type="app" isLoggedIn={isLoggedIn} user={fakeUser} />
              <Community />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
