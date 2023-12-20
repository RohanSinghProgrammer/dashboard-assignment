import React from "react";
import { Navigate } from "react-router-dom";
import useCurrentRole from "../hooks/useCurrentRole";

const ProtectedRoutes = ({ children, roles = [] }) => {
  let currentRole = useCurrentRole();
  return roles.includes(currentRole) ? (
    <>{children}</>
  ) : (
    <Navigate to={"/pageNotFound"} />
  );
};

export default ProtectedRoutes;
