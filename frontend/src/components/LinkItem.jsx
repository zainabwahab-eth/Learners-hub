import { Trash2 } from "lucide-react";

const LinkItem = ({ title, description, url, onDelete, use = "dashboard" }) => {
  return (
    <div className="flex flex-col border-t border-gray-200 py-3 hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors">
      <div className="flex justify-between items-center mb-1">
        <h4 className="test-sm font-semibold text-gray-900 min-w-0 max-w-[80%] sm:max-w-md break-words whitespace-normal">
          {title}
        </h4>
        {use === "dashboard" && (
          <button
            onClick={onDelete}
            className="bg-gray-100 p-2 rounded-lg text-red-400 hover:text-red-600 transition-colors ml-4"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2 min-w-0 sm:max-w-md break-words whitespace-normal">
          {description}
        </p>
        <a
          href={url}
          className="text-sm text-purple-600 hover:text-purple-800 flex items-center space-x-1"
        >
          <span className="break-all min-w-0 sm:max-w-md whitespace-normal">
            {url}
          </span>
        </a>
      </div>
    </div>
  );
};

export default LinkItem;
