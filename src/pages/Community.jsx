import { useEffect, useState } from "react";
import { useFolder } from "../context/useContext";
import Nav from "../components/Nav";
// import { FolderContext } from "../context/FolderContext";

const CommunityPage = () => {
  const { fetchSharedFolders } = useFolder();
  const [sharedFolders, setSharedFolders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchSharedFolders();
      console.log("data", data);
      setSharedFolders(data);
    };
    fetch();
  }, []);

  // 🔍 Filter by title or tags
  const filtered = sharedFolders.filter(
    (folder) =>
      folder.folderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (folder.tags &&
        folder.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        ))
  );

  return (
    <div>
      <Nav />
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Community Folders</h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title or tag..."
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Folder cards */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((folder) => (
              <div
                key={folder.$id}
                className="border rounded-2xl p-4 bg-white shadow hover:shadow-md transition"
              >
                <div className="flex justify-between items-start">
                  <h2 className="font-semibold text-lg">{folder.folderName}</h2>
                  <button className="text-gray-500 hover:text-blue-500">
                    <i className="fa-regular fa-bookmark"></i>
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {folder.description}
                </p>

                {folder.tags && folder.tags.length > 0 && (
                  <div className="flex flex-wrap mt-3 gap-2">
                    {folder.tags.slice(0, 5).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-10 text-center">
            No shared folders found.
          </p>
        )}
      </div>
    </div>
  );
};

export default CommunityPage;
