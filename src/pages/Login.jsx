import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, useAlert } from "../context/useContext";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import lock from "../assets/lock.svg";
import google from "../assets/google.svg";
import eye from "../assets/eye.svg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, AuthWithGoogle } = useAuth();
  const showAlert = useAlert();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleAuth = async () => {
    try {
      await AuthWithGoogle();
    } catch (err) {
      console.error("Error logging in with google", err);
      showAlert("Error logging in. Please try again", error);
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError("");
    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
      console.error("Login failed", err.message);
      showAlert("Error logging in. Please try again", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-4 py-4 bg-gray-200 rounded-full mb-4"
            >
              <img src={logo} alt="Logo" className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Login in to continue</p>
          </div>

          {error && <p className="text-red-500 text-sm text-center"></p>}

          <div className="w-full">
            {/* Google Button */}
            <button
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 border cursor-pointer border-gray-300 rounded-xl text-gray-700 font-medium shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
            >
              <img src={google} alt="Google Icon" className="w-5 h-5" />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            <div className="flex items-center my-3">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500 text-sm font-medium">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <img
                src={mail}
                alt="Mail Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors duration-200"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div className="relative">
              <img
                src={lock}
                alt="Mail Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters ",
                  },
                })}
                className="w-full pl-10 pr-12 py-3 border-2 text-sm border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <img src={eye} alt="Eye-on Icon" className="w-5 h-5" />
                ) : (
                  <img src={eye} alt="Eye-off Icon" className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-medium text-sm hover:bg-purple-800 transition-colors duration-200"
            >
              Login
            </button>
            <div className="inline-flex items-center justify-center m-auto">
              <p className="text-sm">New Here?</p>
              <Link
                to="/signup"
                className="px-2 py-2 text-sm font-medium text-primary rounded-full hover:text-purple-800 transition-colors duration-200"
              >
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
