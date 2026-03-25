import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { FolderProvider } from "./context/FolderContext.jsx";
import { LinkProvider } from "./context/LinkContext.jsx";
import { BookmarkProvider } from "./context/BookmarkContext.jsx";
import { AlertProvider } from "./context/AlertContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AlertProvider>
        <FolderProvider>
          <LinkProvider>
            <BookmarkProvider>
              <App />
            </BookmarkProvider>
          </LinkProvider>
        </FolderProvider>
      </AlertProvider>
    </AuthProvider>
  </StrictMode>
);
