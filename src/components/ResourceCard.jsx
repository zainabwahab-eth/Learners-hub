import link from "../assets/link.svg";

const ResourceCard = ({
  author,
  date,
  title,
  description,
  linkCount,
  tags,
}) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <h3 className="text-m font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <div className="flex items-center mb-4 gap-1">
        <img src={link} alt="Link Icon" className="w-5 h-5" />
        <span className="text-primary font-medium">{linkCount} links</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              tag === "Nodejs"
                ? "bg-purple-100 text-purple-700"
                : "bg-green-100 text-green-700"
            } hover:opacity-80 transition-opacity duration-200`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;
