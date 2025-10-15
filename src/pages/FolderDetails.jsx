import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFolder } from "../context/useContext";
import { useLink } from "../context/useContext";
import ShareFolderOverlay from "../components/ShareFolderOverlay";
import Nav from "../components/Nav";

const FolderDetails = () => {
  const { folderId } = useParams();
  const { current } = useFolder();
  const { links, loading, fetchLinks, createLink, deleteLink } = useLink();
  const [showForm, setShowForm] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
  });

  const folder = current.find((f) => f.$id === folderId);

  useEffect(() => {
    if (folder) fetchLinks(folder.$id);
    // fetchLinks(folderId);
  }, [folder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.url) return alert("Link URL is required");
    createLink(folderId, formData.title, formData.url, formData.description);
    setFormData({ title: "", url: "", description: "" });
    setShowForm(false);
  };

  return (
    <div>
      <Nav />
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Folder Links</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              + Add Link
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
            >
              Share Folder
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading links...</p>
        ) : links.length === 0 ? (
          <p>No links yet in this folder.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {links.map((link) => (
              <div
                key={link.$id}
                className="bg-white border shadow rounded-xl p-5 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm underline"
                >
                  {link.url}
                </a>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => deleteLink(link.$id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 🪄 Share Folder Overlay */}
        {showShareModal && (
          <ShareFolderOverlay
            folder={folder}
            onClose={() => setShowShareModal(false)}
          />
        )}

        {/* Overlay Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Link</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <input
                  type="url"
                  placeholder="URL"
                  value={formData.url}
                  onChange={(e) =>
                    setFormData({ ...formData, url: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <textarea
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="border p-2 rounded"
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// const Dashboard = () => {
//   const { user, login, loading } = useAuth();

//   // const { current, loading, createFolder, deleteFolder, updateFolder } = useFolder();

//   const folders = useFolder();

//   // const [folders, setFolders] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ folderName: "", description: "" });
//   const [updatingId, setUpdatingId] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.folderName) return alert("Enter a folder name");

//     if (updatingId) {
//       folders.updateFolder(updatingId, {
//         folderName: formData.folderName,
//         description: formData.description,
//       });
//     } else {
//       folders.createFolder(formData.folderName, formData.description);
//     }

//     setFormData({ folderName: "", description: "" });
//     setUpdatingId(null);
//     setShowForm(false);
//   };

//   const handleEdit = (folder) => {
//     setFormData({
//       folderName: folder.folderName,
//       description: folder.description || "",
//     });
//     setUpdatingId(folder.$id);
//     setShowForm(true);
//   };

//   const handleDelete = (id) => {
//     if (confirm("Are you sure you want to delete this folder?")) {
//       folders.deleteFolder(id);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <Nav />
//         <div className="flex justify-center items-center h-[80vh] text-lg font-medium">
//           Loading...
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Nav />
//       <div className="p-8 bg-gray-50 min-h-screen">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-3xl font-semibold mb-6 text-gray-800">
//             📁 Learners Hub Dashboard
//           </h1>

//           {/* Not Logged In */}
//           {!user && (
//             <div className="text-center py-20">
//               <p className="text-gray-600 mb-4">
//                 You must log in to create folders.
//               </p>
//               <button
//                 onClick={login}
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Login
//               </button>
//             </div>
//           )}

//           {/* Logged In */}
//           {user && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <p className="text-lg text-gray-700">
//                   Welcome, <span className="font-semibold">{user.name}</span>
//                 </p>
//                 <button
//                   onClick={() => setShowForm(true)}
//                   className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   + Create Folder
//                 </button>
//               </div>

//               {folders.loading ? (
//                 <p className="text-gray-500">Loading folders...</p>
//               ) : folders.length === 0 ? (
//                 <p className="text-gray-500">No folders yet.</p>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {folders.current.map((folder) => (
//                     <Link to={`/folder/${folder.$id}`} key={folder.$id}>
//                       <div
//                         key={folder.$id}
//                         className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition"
//                       >
//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                           {folder.folderName}
//                         </h3>
//                         <p className="text-gray-600 text-sm mb-4">
//                           {folder.description || "No description"}
//                         </p>
//                         <div className="flex justify-between text-sm text-gray-500">
//                           <span>{folder.isShared ? "Shared" : "Private"}</span>
//                           <span>
//                             {new Date(folder.$updatedAt).toLocaleDateString()}
//                           </span>
//                         </div>

//                         <div className="flex justify-end gap-2 mt-4">
//                           <button
//                             onClick={() => handleEdit(folder)}
//                             className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
//                           >
//                             Edit
//                           </button>
//                           <button
//                             onClick={() => handleDelete(folder.$id)}
//                             className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* 🧾 Modal Overlay for Create/Update */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md relative">
//               <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//                 {updatingId ? "Update Folder" : "Create New Folder"}
//               </h2>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Folder name"
//                   value={formData.folderName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, folderName: e.target.value })
//                   }
//                   className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//                 <textarea
//                   placeholder="Description"
//                   value={formData.description}
//                   onChange={(e) =>
//                     setFormData({ ...formData, description: e.target.value })
//                   }
//                   className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//                 ></textarea>

//                 <div className="flex justify-end gap-3">
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowForm(false);
//                       setUpdatingId(null);
//                       setFormData({ folderName: "", description: "" });
//                     }}
//                     className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
//                   >
//                     {updatingId ? "Update" : "Create"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

export default FolderDetails;
