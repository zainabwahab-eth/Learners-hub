import { ID, Query, Permission, Role } from "appwrite";
import { useState, useEffect } from "react";
import { tablesDB } from "../lib/appwrite";
import { FolderContext } from "../context/useContext";
import { useAuth } from "../context/useContext";

export const FolderProvider = ({ children }) => {
  const { user } = useAuth();
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(false);

  const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const FOLDER_COLLECTION_ID = "folders";

  //Get all folders for current user
  const fetchFolders = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        queries: [
          Query.equal("ownerId", user.$id),
          Query.orderDesc("$createdAt"),
        ],
      });
      console.log("fetch", response);
      setFolders(response.rows);
    } catch (err) {
      console.error("Error fetching folders:", err);
    } finally {
      setLoading(false);
    }
  };

  //Get all shared folders for community
  const fetchSharedFolders = async () => {
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        queries: [Query.equal("isShared", true), Query.limit(10)],
      });
      return response.rows; // Return the array of documents
    } catch (err) {
      console.error("Error fetching shared folders:", err);
      return [];
    }
  };

  //Create new folder
  const createFolder = async (folderName, description) => {
    try {
      const response = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        rowId: ID.unique(),
        data: {
          folderName,
          description,
          isShared: false,
          ownerId: user.$id,
        },
        permissions: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      });
      console.log("create folder", response);
      // setFolders((folders) => [response].slice(0, 10));
      setFolders((prev) => [...prev, response]);
      await fetchFolders();
    } catch (err) {
      console.error("Error creating folders:", err);
    }
  };

  // 📝 Update folder (e.g., share or rename)
  const updateFolder = async (folderId, updates) => {
    try {
      const response = await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        rowId: folderId,
        data: {
          ...updates,
          //   updatedAt: new Date().toISOString(),
        },
      });

      setFolders((prev) =>
        prev.map((folder) => (folder.$id === folderId ? response : folder))
      );
      await fetchFolders();
      return response;
    } catch (error) {
      console.error("Error updating folder:", error);
    }
  };

  //Delete folder
  const deleteFolder = async (folderId) => {
    try {
      await tablesDB.deleteRow({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        rowId: folderId,
      });
      setFolders((prev) => prev.filter((f) => f.$id !== folderId));
      await fetchFolders();
    } catch (err) {
      console.error("Error deleting folder:", err);
    }
  };

  useEffect(() => {
    fetchFolders();
    console.log(folders);
  }, [user]);

  return (
    <FolderContext.Provider
      value={{
        current: folders,
        loading,
        createFolder,
        updateFolder,
        deleteFolder,
        fetchSharedFolders,
        // fetchFolders,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};
