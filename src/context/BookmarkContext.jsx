import { ID, Query } from "appwrite";
import { useState, useEffect } from "react";
import { tablesDB } from "../lib/appwrite";
import { BookmarkContext } from "../context/useContext";
import { useAuth } from "../context/useContext";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const BOOKMARK_COLLECTION_ID = "bookmarks";
const FOLDER_COLLECTION_ID = "folders";
const PROFILE_COLLECTION_ID = "profiles";

export const BookmarkProvider = ({ children }) => {
  const { user } = useAuth();
  const [bookmarkedFolders, setBookMarkedFolders] = useState([]);
  const [bookmarkedFoldersData, setBookmarkedFoldersData] = useState([]);
  const [loadingBookmark, setLoadingBookmark] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Get all bookmarks for current user
  const fetchBookmarks = async (currentOffset = 0, append = false) => {
    if (!user) return;
    setLoadingBookmark(true);
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: BOOKMARK_COLLECTION_ID,
        queries: [
          Query.equal("ownerId", user.$id),
          Query.equal("isBookmarked", true),
          Query.orderDesc("$createdAt"),
          Query.limit(10),
          Query.offset(currentOffset),
        ],
      });
      const bookmarks = response.rows || [];

      if (bookmarks.length < 10) setHasMore(false);

      if (append) {
        setBookMarkedFolders((prev) => [...prev, ...bookmarks]);
      } else {
        setBookMarkedFolders(bookmarks);
      }

      // Fetch full folder data for bookmarked folders
      await fetchBookmarkedFoldersData(bookmarks, append);
    } catch (err) {
      console.error("Error fetching bookmarks:", err.message);
    } finally {
      setLoadingBookmark(false);
    }
  };

  //Load more bookmarrks
  const loadMoreBookmarks = async () => {
    const nextOffset = offset + 10;
    setOffset(nextOffset);
    try {
      await fetchBookmarks(nextOffset, true);
    } catch (err) {
      console.error("Load more error", err.message);
    }
  };

  // Fetch complete folder data for bookmarked folders
  const fetchBookmarkedFoldersData = async (bookmarks, append = false) => {
    if (!bookmarks || bookmarks.length === 0) {
      setBookmarkedFoldersData([]);
      return;
    }

    try {
      // Fetch folder details for each bookmark
      const folderPromises = bookmarks.map(async (bookmark) => {
        try {
          // Use getRow to fetch single folder by ID
          const folderRes = await tablesDB.getRow({
            databaseId: DATABASE_ID,
            tableId: FOLDER_COLLECTION_ID,
            rowId: bookmark.folderId,
          });

          // Check if folder is shared
          if (!folderRes.isShared) {
            console.warn("Folder is not shared:", folderRes.$id);
            return null;
          }

          // Fetch folder owner profile
          let ownerProfile = null;
          try {
            const profileRes = await tablesDB.listRows({
              databaseId: DATABASE_ID,
              tableId: PROFILE_COLLECTION_ID,
              queries: [Query.equal("userId", folderRes.ownerId)],
            });
            ownerProfile = profileRes.rows[0] || null;
          } catch (err) {
            console.warn("No profile found for owner:", folderRes.ownerId, err);
          }

          // Combine everything neatly
          return {
            ...folderRes,
            owner: ownerProfile,
            bookmarkId: bookmark.$id,
          };
        } catch (err) {
          console.error("Error fetching folder:", bookmark.folderId, err);
          return null;
        }
      });

      // Wait for all folders to resolve
      const enrichedFolders = await Promise.all(folderPromises);
      const validFolders = enrichedFolders.filter((f) => f !== null);

      if (append) {
        setBookmarkedFoldersData((prev) => [...prev, ...validFolders]);
      } else {
        setBookmarkedFoldersData(validFolders);
      }
    } catch (err) {
      console.error("Error fetching bookmarked folders data:", err);
    }
  };

  const isBookmarked = (folderId) => {
    return bookmarkedFolders.some((bookmark) => bookmark.folderId === folderId);
  };

  const getBookmarkId = (folderId) => {
    const bookmark = bookmarkedFolders.find((b) => b.folderId === folderId);
    return bookmark?.$id;
  };

  //Create new folder
  const addBookmark = async (folderId) => {
    try {
      const response = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: BOOKMARK_COLLECTION_ID,
        rowId: ID.unique(),
        data: {
          folderId,
          ownerId: user.$id,
          isBookmarked: true,
        },
      });
      setBookMarkedFolders((prev) => [...prev, response]);
      await fetchBookmarks(0, false);
      return response;
    } catch (err) {
      console.error("Error adding bookmark:", err);
      throw new Error("Failed to add bookmark.");
    }
  };

  //Remove Bookmark
  const removeBookmark = async (folderId) => {
    const bookmarkId = getBookmarkId(folderId);

    if (!bookmarkId) {
      console.log("Bookmark not found");
      return;
    }

    try {
      await tablesDB.deleteRow({
        databaseId: DATABASE_ID,
        tableId: BOOKMARK_COLLECTION_ID,
        rowId: bookmarkId,
      });

      setBookMarkedFolders((prev) =>
        prev.filter((bookmark) => bookmark.$id !== bookmarkId)
      );
      await fetchBookmarks(0, false);
    } catch (error) {
      console.error("Error removing bookmark:", error);
      throw new Error("Failed to remove bookmark.");
    }
  };

  // Toggle bookmark (add if not bookmarked, remove if bookmarked)
  const toggleBookmark = async (folderId) => {
    try {
      if (isBookmarked(folderId)) {
        await removeBookmark(folderId);
      } else {
        await addBookmark(folderId);
      }
    } catch (err) {
      console.error("Error toggling bookmark:", err);
      throw err;
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, [user]);

  return (
    <BookmarkContext.Provider
      value={{
        bookmarkedFolders,
        fetchBookmarks,
        addBookmark,
        removeBookmark,
        toggleBookmark,
        isBookmarked,
        getBookmarkId,
        loadingBookmark,
        bookmarkedFoldersData,
        hasMore,
        loadMoreBookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};
