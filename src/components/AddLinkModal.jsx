import { useState } from "react";
import { X } from "lucide-react";

const AddLinkModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !url) setError("Title and url is required");
    onSubmit({ title, url, description });
    setTitle("");
    setUrl("");
    setDescription("");
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-primary">Create Folder</h2>
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
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-700 focus:outline-none transition-colors"
            required
          />

          <input
            type="url"
            placeholder="Link URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-700 focus:outline-none transition-colors"
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-700 focus:outline-none transition-colors"
          />

          {error && <p className="text-red-500 text-sm text-center"></p>}

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
          >
            Add Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLinkModal;
