import { useState, useEffect } from "react";
import { api } from "../lib/api";
import { FolderContext } from "../context/useContext";
import { useAuth } from "../context/useContext";

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
      const response = await api.get("/folders", {
        params: { offset: currentOffset, limit: 10 },
      });
      const fetched = response.data.rows || [];

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
      const response = await api.get("/folders/shared", {
        params: { offset: currentOffset, limit: 10 },
      });
      const foldersWithOwners = response.data.rows || [];

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
      const response = await api.post("/folders", { folderName, description });
      setFolders((prev) => [response.data, ...prev]);
    } catch (err) {
      console.error("Error creating folders:", err);
      throw new Error("Error creating folders.");
    }
  };

  // Update folder (e.g., share or rename)
  const updateFolder = async (folderId, updates) => {
    try {
      const response = await api.patch(`/folders/${folderId}`, updates);

      setFolders((prev) =>
        prev.map((folder) => (folder.id === folderId ? response.data : folder))
      );
      return response.data;
    } catch (err) {
      console.error("Error updating folder:", err);
      throw new Error("Error updating folder.");
    }
  };

  //Delete folder
  const deleteFolder = async (folderId) => {
    try {
      await api.delete(`/folders/${folderId}`);
      setFolders((prev) => prev.filter((f) => f.id !== folderId));
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
    }
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
