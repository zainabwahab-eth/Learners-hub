import { useEffect, useState } from "react";
import { useFolder, useLink, useAuth } from "../context/useContext";
import Nav from "../components/Nav";
import LoadingPage from "./Loading";
import FolderCard from "../components/FolderCard";
import Footer from "../components/Footer";
import { Compass, Search } from "lucide-react";

const CommunityPage = () => {
  const { fetchLinks, fetchLinkCounts } = useLink();
  const {
    sharedFolders,
    fetchSharedFolders,
    loadMoreSharedFolders,
    hasMoreShared,
    loadingShared,
  } = useFolder();
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  const [folderLinks, setFolderLinks] = useState({});
  const [loadingLinks, setLoadingLinks] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        await fetchSharedFolders();
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (sharedFolders.length > 0) {
      fetchLinkCounts(sharedFolders.map((f) => f.$id));
    }
  }, [sharedFolders, fetchLinkCounts]);

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
  const filtered = sharedFolders.filter(
    (folder) =>
      folder.folderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (folder.tags &&
        folder.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  if (loading) {
    return <LoadingPage message="Loading folders..." />;
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
              Shared Folders ({filtered.length || 0})
            </h2>
            <p className="text-gray-600 text-sm">
              Here's you folders bookmarked
            </p>
          </div>

          {/* Shared Folders */}
          {filtered.length > 0 ? (
            <div className="space-y-6">
              {filtered.map((folder) => (
                <FolderCard
                  key={folder.$id}
                  use="community"
                  folder={folder}
                  links={folderLinks[folder.$id] || []}
                  isLoading={loadingLinks[folder.$id]}
                  onToggleExpand={() => handleToggleExpand(folder.$id)}
                />
              ))}

              {/* Load More Button */}
              {hasMoreShared && (
                <div className="flex justify-center pt-6">
                  <button
                    className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-purple-800 transition-colors"
                    onClick={loadMoreSharedFolders}
                    disabled={loadingShared}
                  >
                    {loadingShared ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Compass className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No folders shared
              </h2>
              <p className="text-gray-600 text-center max-w-md mb-6">
                No folder shared yet, check back later
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityPage;
