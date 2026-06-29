import { useState, useEffect } from "react";
import { api } from "../lib/api";
import { BookmarkContext } from "../context/useContext";
import { useAuth } from "../context/useContext";

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
      const response = await api.get("/bookmarks", {
        params: { offset: currentOffset, limit: 10 },
      });
      const bookmarks = response.data.rows || [];

      if (bookmarks.length < 10) setHasMore(false);

      if (append) {
        setBookMarkedFolders((prev) => [...prev, ...bookmarks]);
      } else {
        setBookMarkedFolders(bookmarks);
      }

      const enriched = bookmarks.map((bookmark) => ({
        ...bookmark.folder,
        owner: bookmark.folder.owner,
        bookmarkId: bookmark.id,
      }));

      if (append) {
        setBookmarkedFoldersData((prev) => [...prev, ...enriched]);
      } else {
        setBookmarkedFoldersData(enriched);
      }
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

  const isBookmarked = (folderId) => {
    return bookmarkedFolders.some((bookmark) => bookmark.folderId === folderId);
  };

  const getBookmarkId = (folderId) => {
    const bookmark = bookmarkedFolders.find((b) => b.folderId === folderId);
    return bookmark?.id;
  };

  //Create new bookmark
  const addBookmark = async (folderId) => {
    try {
      const response = await api.post("/bookmarks", { folderId });
      setBookMarkedFolders((prev) => [...prev, response.data]);
      await fetchBookmarks(0, false);
      return response.data;
    } catch (err) {
      console.error("Error adding bookmark:", err);
      throw new Error("Failed to add bookmark.");
    }
  };

  //Remove Bookmark
  const removeBookmark = async (folderId) => {
    try {
      await api.delete(`/bookmarks/${folderId}`);
      setBookMarkedFolders((prev) =>
        prev.filter((bookmark) => bookmark.folderId !== folderId)
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
