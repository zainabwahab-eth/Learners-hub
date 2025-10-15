import { useState, useEffect } from "react";
import LinkItem from "./LinkItem";
import { useLink, useAuth } from "../context/useContext";
import {
  Link2,
  MoreVertical,
  Calendar,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FolderCard = ({
  folder,
  links,
  onToggleExpand,
  onAddLink,
  isShared,
  onDelete,
}) => {
  const { user } = useAuth();

  useEffect(() => {
    fetchAllLinkCounts();
  }, [user]);

  const { fetchAllLinkCounts, linkCounts, deleteLink } = useLink();
  const [folderLinks, setFolderLinks] = useState(links);
  const [showMenu, setShowMenu] = useState(false);
  const [isFolderExpanded, setisFolderExpanded] = useState(false);

  useEffect(() => {
    setFolderLinks(links);
  }, [links]);

  const handleToggle = () => {
    onToggleExpand();
    setisFolderExpanded(!isFolderExpanded);
  };

  const handleDeleteLink = async (linkId, folderId) => {
    if (confirm("Are you sure you want to delete this Link?")) {
      await deleteLink(linkId, folderId);
      setFolderLinks((prev) => prev.filter((l) => l.$id !== linkId));
      console.log(folderLinks);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="sticky top-0 z-10 bg-white">
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {folder.folderName}
            </h3>

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
                <button
                  onClick={handleToggle}
                  // onClick={onToggleExpand}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {isFolderExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                    {!isShared && (
                      <button
                        // onClick={() => {
                        //   onDelete();
                        //   setShowMenu(false);
                        // }}
                        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
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
            </div>
          </div>
          <p className="text-gray-600 text-xs md:text-sm mb-4">
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
        </div>
      </div>

      {isFolderExpanded && folderLinks && (
        <div className="max-h-80 overflow-y-auto overflow-x-hidden mt-6 space-y-2">
          {folderLinks.map((link) => (
            <LinkItem
              key={link.$id}
              {...link}
              onDelete={() => handleDeleteLink(link.$id, folder.$id)}
            />
          ))}
          {console.log("folderLinks", folderLinks)}
          {folderLinks.length === 0 && (
            <p>You have not added any link to this folder yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FolderCard;
