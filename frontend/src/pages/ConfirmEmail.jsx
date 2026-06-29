import { Link, useLocation } from "react-router-dom";
import { MailCheck } from "lucide-react";
import logo from "../assets/logo.svg";

const ConfirmEmail = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-4 py-4 bg-gray-200 rounded-full mb-4"
          >
            <img src={logo} alt="Logo" className="w-6 h-6" />
          </Link>

          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <MailCheck className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Check your email
          </h1>
          <p className="text-gray-600 mb-8">
            We sent a confirmation link
            {email && (
              <>
                {" "}
                to <span className="font-semibold text-gray-900">{email}</span>
              </>
            )}
            . Click the link to verify your account, then log in.
          </p>

          <Link
            to="/login"
            className="inline-block w-full bg-primary text-white py-3 rounded-full font-medium text-sm hover:bg-purple-800 transition-colors duration-200"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
