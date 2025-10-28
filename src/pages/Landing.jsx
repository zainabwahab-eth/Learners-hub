import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import landingBackground from "../assets/landing-background.svg";
import { useFolder, useLink } from "../context/useContext";
import { Link } from "react-router-dom";
import FolderCard from "../components/FolderCard";
import { Compass } from "lucide-react";

const Landing = () => {
  const { fetchLinks, fetchLinkCounts } = useLink();
  const { fetchSharedFolders, sharedFolders } = useFolder();
  // const [sharedFolders, setSharedFolders] = useState([]);
  const [folderLinks, setFolderLinks] = useState({});
  const [loadingLinks, setLoadingLinks] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        await fetchSharedFolders();
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (sharedFolders.length > 0) {
      fetchLinkCounts(sharedFolders.map((f) => f.$id));
    }
  }, [sharedFolders, fetchLinkCounts]);

  const handleToggleExpand = async (id) => {
    setLoadingLinks((prev) => ({ ...prev, [id]: true }));
    try {
      const fetchedLinks = await fetchLinks(id);
      setFolderLinks((prev) => ({ ...prev, [id]: fetchedLinks }));
    } catch (err) {
      console.error("Error fetching links", err);
    } finally {
      setLoadingLinks((prev) => ({ ...prev, [id]: false }));
    }
  };

  const features = [
    {
      icon: "🔗",
      title: "Save Links Easily",
      description:
        "Add links to your folders and never lose track of great finds.",
    },
    {
      icon: "🗃️",
      title: "Organize with Folders",
      description:
        "Categorize links, add descriptions, and use tags for better search.",
    },
    {
      icon: "🌍",
      title: "Share with Community",
      description:
        "Publish folders and explore curated collections from others and contribute.",
    },
    {
      icon: "⭐",
      title: "Bookmark What You Love",
      description: "Save shared folders so you can quickly access them later.",
    },
  ];

  return (
    <div>
      <Nav type="landing" />

      <main className="flex-grow">
        {/* Hero Section with gradient background - SVG can be added as background-image */}
        <div
          className="bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${landingBackground})` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
            <h2 className="text-secondary text-m font-bold mb-6">
              Organize. Share. Discover.
            </h2>
            <h1 className="text-gray-900 text-xl md:text-3xl font-semibold mb-8 max-w-4xl mx-auto leading-tight">
              Save your favorite resources and share with the community. All in
              one place.
            </h1>

            <Link
              to="/login"
              className="bg-primary text-white px-10 py-2 rounded-full font-semibold cursor-pointer hover:bg-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-12">
            You can do a lot with LinkVault
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h2 className="text-l flex justify-center mb-4">
                  {feature.icon}
                </h2>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shared Resources Section */}
        <div className="bg-primary py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Shared Resources
            </h2>
            <p className="text-purple-200 mb-10">
              Explore some amazing resources from our community
            </p>
            {loading ? (
              <div className="text-xl font-semibold text-white">
                Loading folders...
              </div>
            ) : sharedFolders.length > 0 ? (
              <div className="space-y-6">
                {sharedFolders.map((folder) => (
                  <FolderCard
                    key={folder.$id}
                    use="community"
                    folder={folder}
                    links={folderLinks[folder.$id] || []}
                    isLoading={loadingLinks[folder.$id]}
                    onToggleExpand={() => handleToggleExpand(folder.$id)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4">
                  <Compass className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  No folders shared
                </h2>
                <p className="text-white text-center max-w-md mb-6">
                  No folder shared yet, check back later
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
