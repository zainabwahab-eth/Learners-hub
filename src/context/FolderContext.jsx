import { ID, Query } from "appwrite";
import { useState, useEffect } from "react";
import { tablesDB } from "../lib/appwrite";
import { FolderContext } from "../context/useContext";
import { useAuth } from "../context/useContext";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const FOLDER_COLLECTION_ID = "folders";
const PROFILE_COLLECTION_ID = "profiles";

export const FolderProvider = ({ children }) => {
  const { user } = useAuth();
  const [folders, setFolders] = useState([]);
  const [loadingFolder, setLoadingFolder] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  //Shared folder
  const [sharedFolders, setSharedFolders] = useState([]);
  const [sharedOffset, setSharedOffset] = useState(0);
  const [hasMoreShared, setHasMoreShared] = useState(true);
  const [loadingShared, setLoadingShared] = useState(false);

  //Get all folders for current user
  const fetchFolders = async (currentOffset = 0, append = false) => {
    if (!user) return;
    setLoadingFolder(true);
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        queries: [
          Query.equal("ownerId", user.$id),
          Query.orderDesc("$createdAt"),
          Query.limit(10),
          Query.offset(currentOffset),
        ],
      });
      console.log("fetch", response);
      const sorted = response.rows.sort(
        (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
      );
      const fetched = sorted || [];

      if (fetched.length < 10) setHasMore(false);

      if (append) {
        setFolders((prev) => [...prev, ...fetched]);
      } else {
        setFolders(fetched);
      }

      return fetched;
    } catch (err) {
      console.error("Error fetching folders:", err);
    } finally {
      setLoadingFolder(false);
    }
  };

  //Load more folders (increase offset)
  const loadMoreFolders = async () => {
    const nextOffset = offset + 10;
    setOffset(nextOffset);
    await fetchFolders(nextOffset, true);
  };

  //Get all shared folders for community
  const fetchSharedFolders = async (currentOffset = 0, append = false) => {
    setLoadingShared(true);
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        queries: [
          Query.equal("isShared", true),
          Query.limit(10),
          Query.offset(currentOffset),
          Query.orderDesc("sharedAt"),
        ],
      });
      const folders = response.rows;

      // For each folder, get the user profile by ownerId
      const foldersWithOwners = await Promise.all(
        folders.map(async (folder) => {
          try {
            const profileRes = await tablesDB.listRows({
              databaseId: DATABASE_ID,
              tableId: PROFILE_COLLECTION_ID,
              queries: [Query.equal("userId", folder.ownerId)],
            });

            const owner = profileRes.rows[0];
            return { ...folder, owner };
          } catch (err) {
            console.error("Error fetching profile for", folder.ownerId, err);
            return { ...folder, owner: null };
          }
        })
      );
      if (foldersWithOwners.length < 10) setHasMoreShared(false);

      if (append) {
        setSharedFolders((prev) => [...prev, ...foldersWithOwners]);
      } else {
        setSharedFolders(foldersWithOwners);
      }
      return foldersWithOwners;
    } catch (err) {
      console.error("Error fetching shared folders:", err);
      return [];
    } finally {
      setLoadingShared(false);
    }
  };

  // Load more shared folders
  const loadMoreSharedFolders = async () => {
    const nextOffset = sharedOffset + 10;
    setSharedOffset(nextOffset);
    await fetchSharedFolders(nextOffset, true);
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
      });
      console.log("create folder", response);
      // setFolders((folders) => [response].slice(0, 10));
      setFolders((prev) => [response, ...prev]);
    } catch (err) {
      console.error("Error creating folders:", err);
      throw new Error("Error creating folders.");
    }
  };

  // Update folder (e.g., share or rename)
  const updateFolder = async (folderId, updates) => {
    try {
      const response = await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: FOLDER_COLLECTION_ID,
        rowId: folderId,
        data: {
          ...updates,
        },
      });

      setFolders((prev) =>
        prev.map((folder) => (folder.$id === folderId ? response : folder))
      );
      return response;
    } catch (err) {
      console.error("Error updating folder:", err);
      throw new Error("Error updating folder.");
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
    } catch (err) {
      console.error("Error deleting folder:", err);
      throw new Error("Error deleting folder.");
    }
  };

  useEffect(() => {
    if (user) {
      setOffset(0);
      setHasMore(true);
      fetchFolders(0, false);
      console.log("hasMore from context", hasMore);
    }
    console.log(folders);
  }, [user]);

  return (
    <FolderContext.Provider
      value={{
        folders,
        loadingFolder,
        createFolder,
        hasMore,
        loadMoreFolders,
        updateFolder,
        deleteFolder,
        fetchFolders,
        //Share folders
        fetchSharedFolders,
        sharedFolders,
        loadMoreSharedFolders,
        hasMoreShared,
        loadingShared,
      }}
    >
      {children}
    </FolderContext.Provider>
  );
};
