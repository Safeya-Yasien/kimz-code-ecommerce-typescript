import { Link } from "react-router";
import Lottie from "lottie-react";

import notFound from "@assets/lottieFiles/notFound.json";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Lottie animationData={notFound} />

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
