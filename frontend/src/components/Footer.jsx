import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="bg-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Built by{" "}
            <span className="font-semibold text-gray-900">Zainab Wahab</span>{" "}
            for appwrite hackathon
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/zainabwahab-eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/zaynab_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/zainab-wahab-8280ba326/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
