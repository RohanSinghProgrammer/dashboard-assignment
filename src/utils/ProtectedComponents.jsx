import React from "react";
import useCurrentRole from "../hooks/useCurrentRole";

const ProtectedComponents = ({ children, roles = [] }) => {
  let currentRole = useCurrentRole();
  return roles.includes(currentRole) ? <>{children}</> : null;
};

export default ProtectedComponents;
