import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let errorStatus = 404;
  let errorStatusText = "Page Not Found";

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText || "Something went wrong";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <h1 className="text-6xl font-bold text-gray-800">Oops!</h1>
      <p className="mt-2 text-2xl font-semibold text-red-500">{errorStatus}</p>
      <p className="mt-2 text-lg text-gray-600">{errorStatusText}</p>
      <p className="mt-4 text-md text-gray-600">
        Something went wrong or the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        replace
        className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        aria-label="Go back to home page"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
