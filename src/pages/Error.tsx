import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-2">Oops! Page not found.</p>
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
