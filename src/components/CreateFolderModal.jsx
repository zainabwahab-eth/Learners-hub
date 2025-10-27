import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CreateFolderModal = ({
  type = "create",
  currentFolder = {},
  isOpen,
  onClose,
  isLoading,
  onSubmit,
}) => {
  const [folderName, setFolderName] = useState("");
  const [folderDescription, setFolderDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [errors, setErrors] = useState({
    folderName: "",
    description: "",
    tag: "",
  });

  useEffect(() => {
    if (type !== "create" && currentFolder) {
      setFolderName(currentFolder.folderName || "");
      setFolderDescription(currentFolder.description || "");
      setTags(currentFolder.tags || []);
    }
  }, [type, currentFolder]);

  if (!isOpen) return null;

  const handleAddTag = (e) => {
    e.preventDefault();
    const newTag = tagInput.trim();
    if (!newTag) return;

    if (tags.includes(newTag)) {
      setErrors((prev) => ({ ...prev, tag: "Tag already exists" }));
      return;
    }

    if (tags.length >= 4) {
      setErrors((prev) => ({ ...prev, tag: "You can only add 4 tags" }));
      return;
    }

    setTags([...tags, newTag]);
    setTagInput("");
    setErrors((prev) => ({ ...prev, tag: "" }));
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!folderName.trim()) {
      setErrors((prev) => ({ ...prev, folderName: "Enter a folder name" }));
      return;
    }
    const data = {
      folderName,
      description: folderDescription,
      ...(type === "share" && { tags }),
    };

    onSubmit(data, type);

    setFolderName("");
    setFolderDescription("");
    setTags([]);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-lg"
        onClick={handleModalClick}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-primary">
            {type === "create" ? "Create Folder" : "Share Folder"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Folder Name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-700 focus:outline-none transition-colors"
            required
          />
          {errors.folderName && (
            <p className="text-red-500 text-sm mt-1">{errors.folderName}</p>
          )}

          <input
            type="text"
            placeholder="Folder Description"
            value={folderDescription}
            onChange={(e) => setFolderDescription(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-700 focus:outline-none transition-colors"
          />

          {type === "share" && (
            <div>
              {/* <label className="block mb-1 font-medium text-gray-700">
                Tags (max 4)
              </label> */}

              {/* Tag Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add Tags (max 4)"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-700 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="bg-purple-700 text-white px-4 py-2 rounded-xl font-medium hover:bg-purple-800 transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Tags Display */}
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {errors.tag && (
                <p className="text-red-500 text-sm mt-1">{errors.tag}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
          >
            {isLoading
              ? type === "create"
                ? "Creating..."
                : "Sharing..."
              : type === "create"
              ? "Create Folder"
              : "Share Folder"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFolderModal;
