import { TLoading } from "@types/shared";
import { ReactNode } from "react";

type TLoadingProps = {
  error: string | null;
  status: TLoading;
  children: ReactNode;
};

const Loading = ({ error, status, children }: TLoadingProps) => {
  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return <>{children}</>;
};

export default Loading;
