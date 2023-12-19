import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SelectionSidebarArrow = ({ name }) => {
  const { pathname: tempPath } = useLocation();
  let pathname = tempPath.slice(1);

  if (name === pathname) {
    return <FaAngleRight />;
  } else {
    return <></>;
  }
};

export default SelectionSidebarArrow;
