import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useContext";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import lock from "../assets/lock.svg";
import google from "../assets/google.svg";
import eye from "../assets/eye.svg";
import person from "../assets/person.svg";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  // const { login } = useAuth();
  const user = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError("");
    try {
      await user.login(data.email, data.password, data.name);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
      console.error("Signup error", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <a
              href="/"
              className="inline-flex items-center justify-center px-4 py-4 bg-gray-200 rounded-full mb-4"
            >
              <img src={logo} alt="Logo" className="w-6 h-6" />
            </a>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Get Started
            </h1>
            <p className="text-gray-600">Signup to get started</p>
          </div>

          {error && <p className="text-red-500 text-sm text-center"></p>}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <img src={google} alt="Google Icon" className="w-4 h-4" />
              <span className="text-sm">Signup with google</span>
            </button>

            <div className="relative">
              <img
                src={person}
                alt="Name Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full pl-10 pr-4 py-3 text-sm border-2 border-gray-300 rounded-xl focus:border-primary focus:outline-none transition-colors duration-200"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

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
              Sign Up
            </button>
            <div className="inline-flex items-center justify-center m-auto">
              <p className="text-sm">Already have an account?</p>
              <a
                href="/login"
                className="px-2 py-2 text-sm font-medium text-primary rounded-full hover:text-purple-800 transition-colors duration-200"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen">
  //     <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
  //     <form onSubmit={handleSubmit} className="w-80 space-y-4">
  //       <input
  //         type="text"
  //         placeholder="Full Name"
  //         className="w-full border p-2 rounded"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         className="w-full border p-2 rounded"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         required
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         className="w-full border p-2 rounded"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         required
  //       />
  //       {error && <p className="text-red-500 text-sm">{error}</p>}
  //       <button
  //         type="submit"
  //         className="w-full bg-blue-600 text-white p-2 rounded"
  //       >
  //         Create Account
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default Signup;
