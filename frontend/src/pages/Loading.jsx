import { Loader2 } from "lucide-react";

const LoadingPage = ({ message }) => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
