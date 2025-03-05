import { useAppSelector } from "@/store/hooks";
import { ReactNode } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to="/login?message=login_required" />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
