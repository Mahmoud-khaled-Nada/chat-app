import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";
import { Loading } from "../components/ui/loading";

const AuthenticationGuard = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loading />;
  if (!user) return <Navigate to="/guest" state={{ from: location }} replace />;

  return <>{children}</>;
};

export default AuthenticationGuard;
