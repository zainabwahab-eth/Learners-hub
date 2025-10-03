import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Auth = () => {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //   const [error, setError] = useState("");

  // const handleSignup = async () => {
  //     try {

  //     } catch
  // }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Learning Hub</h1>
        {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
        <input
          type="text"
          placeholder="Name (for signup)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex justify-between">
          <button
            onClick={""}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
          <button
            onClick={""}
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            Log In
          </button>
        </div>
        <p className="mt-4 text-center">
          <Link to="/community" className="text-blue-500 hover:underline">
            View Community
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
