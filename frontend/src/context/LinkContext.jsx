import { useState, useEffect } from "react";
import { ID, Query } from "appwrite";
import { tablesDB } from "../lib/appwrite";
import { LinkContext } from "../context/useContext";
import { useAuth, useFolder } from "./useContext";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const LINK_COLLECTION_ID = "links";

export const LinkProvider = ({ children }) => {
  const { user } = useAuth();
  const { updateFolder } = useFolder();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [linkCounts, setLinkCounts] = useState({});

  // Fetch all links for a given folder
  const fetchLinks = async (folderId) => {
    if (!folderId) return;
    setLoading(true);
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: LINK_COLLECTION_ID,
        queries: [Query.equal("folderId", folderId)],
      });
      const folderLinks = response.rows.reverse();
      setLinks(folderLinks);
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: response.total,
      }));
      return folderLinks;
    } catch (err) {
      console.error("Error fetching links:", err);
    } finally {
      setLoading(false);
    }
  };

  //Get a folder link
  const getLinkCount = async (folderId) => {
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: LINK_COLLECTION_ID,
        queries: [Query.equal("folderId", folderId), Query.limit(1)],
      });
      return response.total;
    } catch (err) {
      console.error("Error fetching link count:", err);
      return 0;
    }
  };

  const fetchLinkCounts = async (folderIds) => {
    const uniqueIds = [...new Set(folderIds)];
    const counts = await Promise.all(
      uniqueIds.map(async (id) => ({ id, count: await getLinkCount(id) }))
    );
    const newCounts = counts.reduce((acc, { id, count }) => {
      acc[id] = count;
      return acc;
    }, {});
    setLinkCounts((prev) => ({ ...prev, ...newCounts }));
  };

  // Create a new link
  const createLink = async (folderId, title, url, description) => {
    if (!user) return alert("You must be logged in");
    try {
      const response = await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: LINK_COLLECTION_ID,
        rowId: ID.unique(),
        data: {
          title,
          url,
          description,
          folderId,
          ownerId: user.$id,
        },
      });
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: (prev[folderId] || 0) + 1,
      }));
      const newCount = await getLinkCount(folderId);
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: newCount,
      }));
      setLinks((prev) => [...prev, response]);
    } catch (err) {
      console.error("Error creating link:", err);
      throw new Error("Error creating link.");
    }
  };

  // Delete a link
  const deleteLink = async (linkId, folderId) => {
    try {
      await tablesDB.deleteRow({
        databaseId: DATABASE_ID,
        tableId: LINK_COLLECTION_ID,
        rowId: linkId,
      });
      // await fetchLinks(folderId);
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: Math.max((prev[folderId] || 1) - 1, 0),
      }));
      const newCount = await getLinkCount(folderId);
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: newCount,
      }));
      setLinks((prev) => prev.filter((l) => l.$id !== linkId));

      //Delete folder from community if link count = 0
      if (newCount === 0) {
        const folder = await tablesDB.getRow({
          databaseId: DATABASE_ID,
          tableId: "folders",
          rowId: folderId,
        });
        if (folder.isShared) {
          await updateFolder(folderId, { isShared: false });
          console.log(`Folder ${folderId} unshared due to zero links`);
        }
      }
    } catch (err) {
      console.error("Error deleting link:", err);
      throw new Error("Error deleting link.");
    }
  };

  useEffect(() => {}, [user]);

  return (
    <LinkContext.Provider
      value={{
        links,
        loading,
        fetchLinks,
        createLink,
        deleteLink,
        linkCounts,
        fetchLinkCounts,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
