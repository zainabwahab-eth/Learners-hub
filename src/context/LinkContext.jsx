import { useState, useEffect } from "react";
import { ID, Query } from "appwrite";
import { tablesDB } from "../lib/appwrite";
import { LinkContext } from "../context/useContext";
import { useAuth } from "./useContext";

export const LinkProvider = ({ children }) => {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [linkCounts, setLinkCounts] = useState({});

  const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  const LINK_COLLECTION_ID = "links";

  // Fetch all links for a given folder
  const fetchLinks = async (folderId) => {
    if (!user || !folderId) return;
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
        [folderId]: folderLinks.length,
      }));
      return folderLinks;
      // console.log("links", response);
    } catch (err) {
      console.error("Error fetching links:", err);
    } finally {
      setLoading(false);
    }
  };

  //Fetch the number of links in a folder
  const fetchAllLinkCounts = async () => {
    if (!user) return;
    try {
      const response = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: LINK_COLLECTION_ID,
      });

      const counts = {};
      response.rows.forEach((link) => {
        const folderId = link.folderId;
        counts[folderId] = (counts[folderId] || 0) + 1;
      });

      setLinkCounts(counts);
    } catch (err) {
      console.error("Error fetching link counts:", err);
    }
  };

  // Create a new link
  const createLink = async (folderId, title, url, description) => {
    if (!user) return alert("You must be logged in");
    try {
      await tablesDB.createRow({
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
      await fetchLinks(folderId);
      await fetchAllLinkCounts();
      // setLinks((prev) => [...prev, response]);
      // setLinkCounts((prev) => ({
      //   ...prev,
      //   [folderId]: (prev[folderId] || 0) + 1,
      // }));
    } catch (err) {
      console.error("Error creating link:", err);
    }
  };

  // Update a link
  const updateLink = async (linkId, updates) => {
    try {
      const response = await tablesDB.updateRow({
        databaseId: DATABASE_ID,
        tableId: LINK_COLLECTION_ID,
        rowId: linkId,
        data: { ...updates },
      });
      setLinks((prev) => prev.map((l) => (l.$id === linkId ? response : l)));
      return response;
    } catch (err) {
      console.error("Error updating link:", err);
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
      await fetchLinks(folderId);
      await fetchAllLinkCounts();
      // setLinks((prev) => prev.filter((l) => l.$id !== linkId));
      // setLinkCounts((prev) => ({
      //   ...prev,
      //   [folderId]: Math.max((prev[folderId] || 1) - 1, 0),
      // }));
    } catch (err) {
      console.error("Error deleting link:", err);
    }
  };

  useEffect(() => {
    // optionally leave this blank and fetch inside FolderDetails
  }, [user]);

  return (
    <LinkContext.Provider
      value={{
        links,
        loading,
        fetchLinks,
        createLink,
        updateLink,
        deleteLink,
        linkCounts,
        fetchAllLinkCounts,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};
