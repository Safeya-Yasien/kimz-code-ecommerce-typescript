import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <h1 className="text-6xl font-bold text-gray-800">Oops!</h1>
      <p className="mt-4 text-lg text-gray-600">
        Something went wrong or the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        replace
        className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
