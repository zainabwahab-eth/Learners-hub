import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FolderCard from "../components/FolderCard";
import CreateFolderModal from "../components/CreateFolderModal";
import AddLinkModal from "../components/AddLinkModal";
// import { useAuth } from "../context/useContext";
import { useFolder, useLink } from "../context/useContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const folders = useFolder();
  const { createLink, fetchLinks } = useLink();
  const [folderId, setFolderId] = useState("");
  const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);
  const [folderLinks, setFolderLinks] = useState({});

  const handleCreateFolder = (folderData) => {
    folders.createFolder(folderData.folderName, folderData.description);
    setIsCreateFolderModalOpen(false);
  };

  const handleAddLink = async (linkData) => {
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
  };

  const handleToggleExpand = async (id) => {
    console.log("Fetching links for folder:", id);
    const fetchedLinks = await fetchLinks(id);
    console.log("Fetched links:", fetchedLinks);
    setFolderLinks((prev) => ({ ...prev, [id]: fetchedLinks }));
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this folder?")) {
      folders.deleteFolder(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Nav />

      <div className="bg-primary py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-medium text-white mb-6">Hello Zainab</h1>
          <button
            onClick={() => setIsCreateFolderModalOpen(true)}
            className="w-full max-w-md bg-white text-primary align-center px-6 py-3 rounded-xl font-semibold flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span>Create Folder</span>
          </button>
        </div>
      </div>

      <main className="flex-grow py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your Folders
            </h2>
            <p className="text-gray-600 text-sm">
              Explore some amazing resources from our community
            </p>
          </div>

          <div className="space-y-6">
            {folders.current.map((folder) => (
              <FolderCard
                key={folder.$id}
                folder={folder}
                links={folderLinks[folder.$id] || []}
                onToggleExpand={() => handleToggleExpand(folder.$id)}
                onAddLink={() => {
                  setIsAddLinkModalOpen(true);
                  setFolderId(folder.$id);
                }}
                isShared={folder.isShared}
                onDelete={() => handleDelete(folder.$id)}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <CreateFolderModal
        isOpen={isCreateFolderModalOpen}
        onClose={() => setIsCreateFolderModalOpen(false)}
        onSubmit={handleCreateFolder}
      />

      <AddLinkModal
        isOpen={isAddLinkModalOpen}
        onClose={() => {
          setIsAddLinkModalOpen(false);
          setFolderId("");
        }}
        onSubmit={handleAddLink}
      />
    </div>
  );
};

export default Dashboard;
