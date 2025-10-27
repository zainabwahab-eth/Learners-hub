import { useState, useEffect } from "react";
import LinkItem from "./LinkItem";
import {
  useLink,
  useAuth,
  useFolder,
  useBookmark,
} from "../context/useContext";
import {
  Link2,
  MoreVertical,
  Calendar,
  Globe,
  ChevronDown,
  ChevronUp,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import CreateFolderModal from "../components/CreateFolderModal";
import { useAlert } from "../context/useContext";

const FolderCard = ({
  use = "dashboard",
  folder,
  links,
  isLoading = false,
  onToggleExpand,
  onAddLink,
  isShared,
  onDelete,
  onLinkDeleted,
}) => {
  const { user } = useAuth();
  const { updateFolder } = useFolder();
  const { isBookmarked, toggleBookmark } = useBookmark();
  const { showAlert } = useAlert();
  const { linkCounts, deleteLink } = useLink();
  const [folderLinks, setFolderLinks] = useState(links);
  const [showMenu, setShowMenu] = useState(false);
  const [isFolderExpanded, setisFolderExpanded] = useState(false);
  const [isShareFolderModalOpen, setIsShareFolderModalOpen] = useState(false);

  useEffect(() => {
    setFolderLinks(links);
  }, [links]);
  console.log("linkcount", linkCounts[folder.$id]);

  const handleToggle = () => {
    onToggleExpand();
    setisFolderExpanded(!isFolderExpanded);
  };

  const handleDeleteLink = async (linkId, folderId) => {
    try {
      if (confirm("Are you sure you want to delete this Link?")) {
        await deleteLink(linkId, folderId);
        setFolderLinks((prev) => prev.filter((l) => l.$id !== linkId));

        if (onLinkDeleted) {
          onLinkDeleted(folderId, linkId);
        }
        showAlert("Link deleted successfully!", "success");
      }
    } catch (err) {
      console.error("Error deleting Link:", err);
      showAlert("Failed to delete link. Please try again.", "error");
    }
  };

  const handlShareModal = () => {
    if (linkCounts[folder.$id] === undefined) {
      setShowMenu(false);
      showAlert("You can't share a folder with no link", "info");
    }
    setIsShareFolderModalOpen(true);
  };

  const handleShareFolder = async (folderData, type) => {
    try {
      if (type === "share") {
        updateFolder(folder.$id, {
          folderName: folderData.folderName,
          description: folderData.description,
          tags: folderData.tags,
          isShared: true,
          sharedAt: new Date().toISOString(),
        });
      }
      setIsShareFolderModalOpen(false);
      showAlert("Folder shared successfully!", "success");
    } catch (err) {
      console.error("Error Sharing folder:", err);
      showAlert("Failed to Sharing folder. Please try again.", "error");
    }
  };

  const handleBookmark = async (folder) => {
    try {
      await toggleBookmark(folder.$id);
      console.log("Booking toggled");
      showAlert("Bookmark updated successfully!", "success");
    } catch (err) {
      console.error("Error toggling bookmark:", err);
      showAlert("Failed to update bookmark. Please try again.", "error");
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="sticky top-12 z-10 bg-white">
        {use !== "dashboard" && (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                {folder?.owner?.name?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm">{folder.owner?.name}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              {user && (
                <button
                  onClick={() => {
                    handleBookmark(folder);
                  }}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {isBookmarked(folder.$id) ? (
                    <BookmarkCheck className="w-5 h-5 text-primary" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
              )}
              <button
                onClick={handleToggle}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isFolderExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-3 gap-2">
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 min-w-0 max-w-[70%] sm:max-w-md break-words whitespace-normal">
              {folder.folderName}
            </h3>
            {use === "dashboard" && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={onAddLink}
                  className="px-4 py-2 bg-primary text-sm text-white rounded-lg font-medium hover:bg-purple-800 transition-colors"
                >
                  Add link
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                      {!isShared && (
                        <button
                          onClick={handlShareModal}
                          disabled={linkCounts[folder.$id] === 0}
                          className={`w-full text-left px-4 py-2 rounded-lg font-medium
    ${
      linkCounts[folder.$id] === 0
        ? "bg-gray-50 text-gray-500 cursor-not-allowed"
        : "text-gray-700 hover:bg-gray-50 transition-colors"
    }`}
                        >
                          Share
                        </button>
                      )}
                      <button
                        onClick={() => {
                          onDelete();
                          setShowMenu(false);
                        }}
                        className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleToggle}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {isFolderExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>
            )}
          </div>
          <p className="text-gray-600 text-sm md:text-sm mb-4 break-words whitespace-normal min-w-0">
            {folder.description}
          </p>
        </div>
        <div className="flex items-center justify-between space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            {isShared && <Globe className="w-4 h-4" />}
            <Link2 className="w-5 h-4 text-primary" />
            <span className="text-primary font-semibold">
              {linkCounts[folder.$id] || 0} links
            </span>
          </div>
          {use === "dashboard" && (
            <div className="flex items-center space-x-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(folder.$createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        {use !== "dashboard" && (
          <div className="flex flex-row pt-4 gap-2">
            {folder.tags?.map((tag, index) => (
              <div key={index} className="bg-amber-200 py-1 px-4 rounded-3xl">
                <p className="text-primary text-sm font-medium">{tag}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {isFolderExpanded && folderLinks && (
        <div className="max-h-80 overflow-y-auto overflow-x-hidden mt-6 space-y-2">
          {isLoading ? (
            <p className="text-gray-500 italic">Loading links...</p>
          ) : links.length === 0 ? (
            <p>You have not added any link to this folder yet</p>
          ) : (
            links.map((link) => (
              <LinkItem
                key={link.$id}
                {...link}
                onDelete={() => handleDeleteLink(link.$id, folder.$id)}
                use={use}
              />
            ))
          )}
        </div>
      )}

      <CreateFolderModal
        type="share"
        currentFolder={folder}
        isOpen={isShareFolderModalOpen}
        onClose={() => setIsShareFolderModalOpen(false)}
        onSubmit={handleShareFolder}
      />
    </div>
  );
};

export default FolderCard;
