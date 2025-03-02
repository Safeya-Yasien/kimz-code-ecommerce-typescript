import { ReactNode } from "react";

type TLoadingProps = {
  children: ReactNode;
  status: string;
  error: null | string;
};

const Loading = ({ children, status, error }: TLoadingProps) => {
  if (status === "pending") {
    return <div>loading please wait</div>;
  }

  if (status === "failed") {
    return <div>error: {error}</div>;
  }

  return <div>{children}</div>;
};
export default Loading;
