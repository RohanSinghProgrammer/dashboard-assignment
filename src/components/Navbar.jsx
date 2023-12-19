import React from "react";
import { FaBell, FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[10%] bg-ui-turquoise flex items-center justify-between px-8">
      <p className="text-white italic font-semibold text-3xl">Helpdesk</p>
      {/* ACTION BUTTONS */}
      <div className="flex items-center space-x-4 text-xl">
        <ToggleButton />
        <FaBell />
        <Link to={"/user"}>
          <FaUser />
        </Link>
        <MdLogout />
      </div>
    </div>
  );
};

export default Navbar;
