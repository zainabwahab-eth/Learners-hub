import { useState } from "react";
import { useFolder } from "../context/useContext";

const ShareFolderOverlay = ({ folder, onClose }) => {
  const { updateFolder } = useFolder();
  const [formData, setFormData] = useState({
    folderName: folder.folderName || "",
    description: folder.description || "",
    tags: folder.tags || [],
  });
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (
      tagInput.trim() &&
      formData.tags.length < 5 &&
      !formData.tags.includes(tagInput.trim())
    ) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const handleConfirm = async () => {
    await updateFolder(folder.$id, {
      folderName: formData.folderName,
      description: formData.description,
      tags: formData.tags,
      isShared: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Share Folder
        </h2>

        <label className="block text-sm font-medium text-gray-700">
          Folder Name
        </label>
        <input
          type="text"
          value={formData.folderName}
          onChange={(e) =>
            setFormData({ ...formData, folderName: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows="3"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags (max 5)
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {formData.tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
            >
              {tag}
              <button
                type="button"
                onClick={() => handleRemoveTag(tag)}
                className="text-indigo-500 hover:text-indigo-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a tag"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), handleAddTag())
            }
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleAddTag}
            className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
          >
            Add
          </button>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareFolderOverlay;
