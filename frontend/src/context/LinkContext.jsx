import { useState } from "react";
import { api } from "../lib/api";
import { LinkContext } from "../context/useContext";
import { useAuth } from "./useContext";

export const LinkProvider = ({ children }) => {
  const { user } = useAuth();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [linkCounts, setLinkCounts] = useState({});

  // Fetch all links for a given folder
  const fetchLinks = async (folderId) => {
    if (!folderId) return;
    setLoading(true);
    try {
      const response = await api.get("/links", { params: { folderId } });
      const folderLinks = response.data;
      setLinks(folderLinks);
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: folderLinks.length,
      }));
      return folderLinks;
    } catch (err) {
      console.error("Error fetching links:", err);
    } finally {
      setLoading(false);
    }
  };

  //Get a folder link count
  const getLinkCount = async (folderId) => {
    try {
      const response = await api.get("/links/count", { params: { folderId } });
      return response.data.count;
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
      const response = await api.post("/links", {
        folderId,
        title,
        url,
        description,
      });
      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: (prev[folderId] || 0) + 1,
      }));
      setLinks((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("Error creating link:", err);
      throw new Error("Error creating link.");
    }
  };

  // Delete a link
  const deleteLink = async (linkId, folderId) => {
    try {
      const response = await api.delete(`/links/${linkId}`);
      const { count: newCount } = response.data;

      setLinkCounts((prev) => ({
        ...prev,
        [folderId]: newCount,
      }));
      setLinks((prev) => prev.filter((l) => l.id !== linkId));
    } catch (err) {
      console.error("Error deleting link:", err);
      throw new Error("Error deleting link.");
    }
  };

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
