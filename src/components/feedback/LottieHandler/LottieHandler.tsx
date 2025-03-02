import Lottie from "lottie-react";

import notFound from "@assets/lottieFiles/notFound.json";
import error from "@assets/lottieFiles/error.json";
import loading from "@assets/lottieFiles/loading.json";
import empty from "@assets/lottieFiles/empty.json";
import { Link } from "react-router";

const lottieFiles = {
  notFound,
  error,
  loading,
  empty,
};

type TLottieHandlerProps = {
  type: keyof typeof lottieFiles;
  message?: string;
};

const LottieHandler = ({ type, message }: TLottieHandlerProps) => {
  const lottieAnimation = lottieFiles[type];

  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie animationData={lottieAnimation} />

      {message &&
        (["notFound", "empty", "error"].includes(type) ? (
          <Link
            to={"/categories"}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            {message}
          </Link>
        ) : (
          <p className="text-gray-600 text-lg">{message}</p>
        ))}
    </div>
  );
};
export default LottieHandler;
