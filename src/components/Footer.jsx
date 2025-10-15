import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Built by{" "}
            <span className="font-semibold text-gray-900">Zainab Wahab</span>{" "}
            for appwrite hackathon
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
