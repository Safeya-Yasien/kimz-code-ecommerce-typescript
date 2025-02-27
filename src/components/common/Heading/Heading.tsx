import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      {children}
    </h2>
  );
};
export default Heading;
