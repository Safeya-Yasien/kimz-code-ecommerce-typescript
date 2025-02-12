import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();

  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page not found";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">{errorStatus}</h1>
      <p className="text-xl text-gray-700 mt-2">{errorStatusText}</p>
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
