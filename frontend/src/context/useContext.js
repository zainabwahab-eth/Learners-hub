import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const FolderContext = createContext();

export const LinkContext = createContext();

export const BookmarkContext = createContext();

export const AlertContext = createContext();

//hook to use auth context
export const useAuth = () => useContext(AuthContext);

//hook to use folder context
export const useFolder = () => useContext(FolderContext);

//hook to use link context
export const useLink = () => useContext(LinkContext);

//hook to use bookmark context
export const useBookmark = () => useContext(BookmarkContext);

//hook to use alert context
export const useAlert = () => useContext(AlertContext);
