import { LottieHandler } from "@/components/feedback";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <LottieHandler type="notFound" message="Back to Home" />
    </div>
  );
};

export default Error;
