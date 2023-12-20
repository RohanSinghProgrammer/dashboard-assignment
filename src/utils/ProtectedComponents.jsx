import React from "react";

const ProtectedComponents = ({ children, roles = [] }) => {
  let userRole = localStorage.getItem("userRole");
  let currentRole;
  switch (userRole) {
    case "1":
      currentRole = "user";
      break;
    case "2":
      currentRole = "operationTeam";
      break;
    case "3":
      currentRole = "technicalSupport";
      break;
    case "4":
      currentRole = "admin";
      break;

    default:
      break;
  }

  return roles.includes(currentRole) ? <>{children}</> : null;
};

export default ProtectedComponents;
