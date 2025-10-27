import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLink, useAuth, useBookmark } from "../context/useContext";
import LoadingPage from "./Loading";
import FolderCard from "../components/FolderCard";
import { Bookmark, Search } from "lucide-react";

const BookmarksPage = () => {
  const {
    bookmarkedFoldersData,
    fetchBookmarks,
    loadMoreBookmarks,
    hasMore,
    loadingBookmark,
  } = useBookmark();
  const { user } = useAuth();
  const { fetchLinks, fetchLinkCounts } = useLink();
  const [searchTerm, setSearchTerm] = useState("");
  const [folderLinks, setFolderLinks] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingLinks, setLoadingLinks] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        await fetchBookmarks();
      } catch (err) {
        console.error("Error fetching data:", err);
        
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (bookmarkedFoldersData.length > 0) {
      fetchLinkCounts(bookmarkedFoldersData.map((f) => f.$id));
    }
  }, [bookmarkedFoldersData, fetchLinkCounts]);

  const handleToggleExpand = async (id) => {
    setLoadingLinks((prev) => ({ ...prev, [id]: true }));

    try {
      const fetchedLinks = await fetchLinks(id);
      setFolderLinks((prev) => ({ ...prev, [id]: fetchedLinks }));
    } catch (err) {
      console.error("Error fetching links", err);
    } finally {
      setLoadingLinks((prev) => ({ ...prev, [id]: false }));
    }
  };

  // Filter by title or tags
  const filtered = bookmarkedFoldersData.filter(
    (folder) =>
      folder.folderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (folder.tags &&
        folder.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  if (loading) {
    return <LoadingPage message="Loading bookmarks..." />;
  }

  return (
    <div>
      <Nav />
      <div className="bg-primary py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-medium text-white mb-6">
            Hello {user?.name.split(" ")[0] || "user"}
          </h1>

          {/* Search bar */}
          <div className="relative w-full mb-6 z-0">
            <Search className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or tag..."
              className="bg-white z-0 rounded-lg pl-9 pr-3 py-2 w-full hover:bg-gray-50 transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <main className="p-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Bookmarked Folders ({filtered.length || 0})
            </h2>
            <p className="text-gray-600 text-sm">You bookmarked folders</p>
          </div>

          {/* Bookmarked Folders */}
          {filtered.length > 0 ? (
            <div className="space-y-6">
              {filtered.map((folder) => (
                <FolderCard
                  key={folder.$id}
                  use="bookmarks"
                  folder={folder}
                  links={folderLinks[folder.$id] || []}
                  isLoading={loadingLinks[folder.$id]}
                  isShared={folder.isShared}
                  onToggleExpand={() => handleToggleExpand(folder.$id)}
                />
              ))}

              {hasMore && (
                <div className="text-center mt-8">
                  <button
                    onClick={loadMoreBookmarks}
                    disabled={loadingBookmark}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    {loadingBookmark ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Bookmark className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No bookmarks yet
              </h2>
              <p className="text-gray-600 text-center max-w-md mb-6">
                Start bookmarking folders to quickly access them later. Click
                the bookmark icon on any shared folder to add it here.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookmarksPage;
