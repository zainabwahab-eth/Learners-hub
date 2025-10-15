import Nav from "../components/Nav";
import ResourceCard from "../components/ResourceCard";
import Footer from "../components/Footer";
import landingBackground from "../assets/landing-background.svg";

const Landing = () => {
  const resources = [
    {
      author: "Zainab Wahab",
      date: "Sept 4",
      title: "Nodejs Auth Resources",
      description: "Some resources I'm using to learn backend authentication",
      linkCount: 7,
      tags: ["Nodejs", "Express"],
    },
    {
      author: "Zainab Wahab",
      date: "Sept 4",
      title: "Nodejs Auth Resources",
      description: "Some resources I'm using to learn backend authentication",
      linkCount: 7,
      tags: ["Nodejs", "Express"],
    },
    {
      author: "Zainab Wahab",
      date: "Sept 4",
      title: "Nodejs Auth Resources",
      description: "Some resources I'm using to learn backend authentication",
      linkCount: 7,
      tags: ["Nodejs", "Express"],
    },
    {
      author: "Zainab Wahab",
      date: "Sept 4",
      title: "Nodejs Auth Resources",
      description: "Some resources I'm using to learn backend authentication",
      linkCount: 7,
      tags: ["Nodejs", "Express"],
    },
  ];

  const features = [
    {
      // icon: <Link2 className="w-8 h-8" />,
      icon: "🔗",
      title: "Save Links Easily",
      description:
        "Add links to your folders and never lose track of great finds.",
    },
    {
      // icon: <Folder className="w-8 h-8" />,
      icon: "🗃️",
      title: "Organize with Folders",
      description:
        "Categorize links, add descriptions, and use tags for better search.",
    },
    {
      // icon: <Globe className="w-8 h-8" />,
      icon: "🌍",
      title: "Share with Community",
      description:
        "Publish folders and explore curated collections from others.",
    },
    {
      // icon: <Bookmark className="w-8 h-8" />,
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

            <button
              // onClick={()}
              className="bg-primary text-white px-10 py-2 rounded-full font-semibold text- hover:bg-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-12">
            You can do a lot with Linkora
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Shared Resources
            </h2>
            <p className="text-purple-200 mb-10">
              Explore some amazing resources from our community
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
