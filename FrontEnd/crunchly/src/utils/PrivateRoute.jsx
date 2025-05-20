import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return !isAuthenticated ? <Navigate to="/login"/> : children;
};
export default PrivateRoute;