import { Trash2 } from "lucide-react";

const LinkItem = ({ title, description, url, onDelete }) => {
  return (
    <div className="border-t border-gray-200 py-3 flex justify-between items-start hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors">
      <div className="flex-1">
        <h4 className="test-sm font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <a
          href={url}
          className="text-sm text-purple-600 hover:text-purple-800 flex items-center space-x-1"
        >
          <span className="break-all">{url}</span>
        </a>
      </div>
      <button
        onClick={onDelete}
        className="bg-gray-100 p-2 rounded-lg text-red-400 hover:text-red-600 transition-colors ml-4"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default LinkItem;
