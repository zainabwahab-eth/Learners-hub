import Nav from "../components/Nav";

const Landing = () => {
  return (
    <div>
      <Nav type="landing" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Learners Hub</h1>
        <p className="text-lg text-gray-600 max-w-md">
          Organize your learning resources and share with the community 🚀
        </p>
      </div>
    </div>
  );
};

export default Landing;
