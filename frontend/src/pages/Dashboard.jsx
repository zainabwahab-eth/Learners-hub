import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoadingPage from "./Loading";
import FolderCard from "../components/FolderCard";
import CreateFolderModal from "../components/CreateFolderModal";
import AddLinkModal from "../components/AddLinkModal";
import { useFolder, useLink, useAuth } from "../context/useContext";
import { Home } from "lucide-react";
import { useAlert } from "../context/useContext";

const Dashboard = () => {
  const {
    fetchFolders,
    createFolder,
    deleteFolder,
    folders,
    loadMoreFolders,
    hasMore,
    loadingFolder,
  } = useFolder();
  const { user } = useAuth();
  const { showAlert } = useAlert();
  const { createLink, fetchLinks, fetchLinkCounts } = useLink();
  const [folderId, setFolderId] = useState("");
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const [folderLinks, setFolderLinks] = useState({});
  const [loadingLinks, setLoadingLinks] = useState({});
  const [loading, setLoading] = useState(false);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [isAddingLink, setIsAddingLink] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        await fetchFolders();
        // setFolders(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (folders.length > 0) {
      fetchLinkCounts(folders.map((f) => f.$id));
    }
  }, [folders, fetchLinkCounts]);

  const handleCreateFolder = async (folderData) => {
    try {
      setIsCreatingFolder(true);

      await createFolder(folderData.folderName, folderData.description);
      setIsCreateFolderModalOpen(false);
      showAlert("Folder created successfully!", "success");
    } catch (err) {
      console.error("Error creating folder", err);
      showAlert("Something went wrong. Please try again!", "error");
    } finally {
      setIsCreatingFolder(false);
    }
  };

  const handleAddLink = async (linkData) => {
    try {
      setIsAddingLink(true);
      await createLink(
        folderId,
        linkData.title,
        linkData.url,
        linkData.description
      );
      const updatedLinks = await fetchLinks(folderId);
      setFolderLinks((prev) => ({
        ...prev,
        [folderId]: updatedLinks,
      }));

      setIsAddLinkModalOpen(false);
      showAlert("Link Added successfully!", "success");
    } catch (err) {
      console.error("Error adding link", err);
      showAlert("Something went wrong. Please try again!", "error");
    } finally {
      setIsAddingLink(false);
    }
  };

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

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this folder?")) {
        await deleteFolder(id);
        showAlert("Folder deleted successfully!", "success");
      }
    } catch (err) {
      console.error("Error deleting folder", err);
      showAlert("Something went wrong. Please try again!", "error");
    }
  };

  const handleLinkDeleted = (folderId, linkId) => {
    setFolderLinks((prev) => ({
      ...prev,
      [folderId]: (prev[folderId] || []).filter((l) => l.$id !== linkId),
    }));
  };

  if (loading) {
    return <LoadingPage message="Loading your folders..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Nav />

      <div className="bg-primary py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-medium text-white mb-6">
            Hello {user?.name.split(" ")[0] || "user"}
          </h1>
          <button
            onClick={() => setIsCreateFolderModalOpen(true)}
            className="w-full bg-white text-primary align-center px-6 py-3 rounded-xl font-semibold flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span>Create Folder</span>
          </button>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your Folders ({folders.length})
            </h2>
            <p className="text-gray-600 text-sm">Here are all you folders</p>
          </div>

          {/* Shared Folders */}
          {folders.length > 0 ? (
            <div className="space-y-6">
              {folders.map((folder) => (
                <FolderCard
                  key={folder.$id}
                  folder={folder}
                  links={folderLinks[folder.$id] || []}
                  isLoading={loadingLinks[folder.$id]}
                  onToggleExpand={() => handleToggleExpand(folder.$id)}
                  onAddLink={() => {
                    setIsAddLinkModalOpen(true);
                    setFolderId(folder.$id);
                  }}
                  isShared={folder.isShared}
                  onDelete={() => handleDelete(folder.$id)}
                  onLinkDeleted={handleLinkDeleted}
                />
              ))}

              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center pt-6">
                  <button
                    onClick={() => loadMoreFolders()}
                    className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-purple-800 transition-colors"
                    disabled={loadingFolder}
                  >
                    {loadingFolder ? "Loading..." : "Load More"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Home className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No folders
              </h2>
              <p className="text-gray-600 text-center max-w-md mb-6">
                You don't have any folders. Click on create folder button to
                begin creating folders
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <CreateFolderModal
        isOpen={isCreateFolderModalOpen}
        onClose={() => setIsCreateFolderModalOpen(false)}
        onSubmit={handleCreateFolder}
        isLoading={isCreatingFolder}
      />

      <AddLinkModal
        isOpen={isAddLinkModalOpen}
        onClose={() => {
          setIsAddLinkModalOpen(false);
          setFolderId("");
        }}
        onSubmit={handleAddLink}
        isLoading={isAddingLink}
      />
    </div>
  );
};

export default Dashboard;
