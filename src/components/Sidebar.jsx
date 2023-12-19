import React from "react";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";
import { FaAngleRight, FaDatabase, FaUserAlt } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import SelectionSidebarArrow from "./SelectionSidebarArrow";
import { Link, useLocation } from "react-router-dom";
import { BiSolidUserVoice } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-72 bg-ui-gray h-full p-4 space-y-1 font-semibold">
      <Link
        to={"/"}
        className="flex items-center tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
      >
        {pathname.length == 1 && <FaAngleRight className="mr-2" />}
        <MdOutlineDashboard />
        <p className="ml-1">Dashboard</p>
      </Link>
      <div className="tracking-wide w-full">
        <Link
          to={"/database"}
          className="flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-md"
        >
          <FaDatabase />
          <p>Database</p>
        </Link>
        {pathname == "/database" && (
          <div className="px-2 pb-2 mt-2">
            <div className="flex space-x-2 items-center">
              <SelectionSidebarArrow name={"database"} />
              <FaUserAlt />
              <p>User</p>
            </div>
            <div className="pl-6 mt-2">
              <div className="flex space-x-2 items-center">
                <BiSolidUserVoice className="text-xl" />
                <p>Operation Team</p>
              </div>
              <div className="flex space-x-2 items-center mt-2">
                <FaUsersGear className="text-xl" />
                <p>Technical Support</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link
        to={"/settings"}
        className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
      >
        <SelectionSidebarArrow name={"settings"} />
        <MdSettings />
        <p>Settings</p>
      </Link>
      <Link
        to={"/userLog"}
        className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
      >
        <SelectionSidebarArrow name={"userLog"} />
        <AiFillDatabase />
        <p>User Log History</p>
      </Link>
    </div>
  );
};

export default Sidebar;
