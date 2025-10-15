import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FolderProvider } from "./context/FolderContext.jsx";
import { LinkProvider } from "./context/LinkContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FolderProvider>
        <LinkProvider>
          <App />
        </LinkProvider>
      </FolderProvider>
    </AuthProvider>
  </StrictMode>
);
