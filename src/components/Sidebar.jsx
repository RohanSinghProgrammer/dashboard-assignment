import React from "react";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";
import { FaAngleRight, FaDatabase } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="w-72 bg-ui-gray h-full p-4 space-y-1 font-semibold">
      <button className="flex items-center tracking-wide p-2 rounded-md hover:bg-gray-300 w-full">
        <FaAngleRight className="mr-2" />
        <MdOutlineDashboard />
        <p className="ml-1">Dashboard</p>
      </button>
      <button className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full">
        <FaDatabase />
        <p>Database</p>
      </button>
      <button className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full">
        <MdSettings />
        <p>Settings</p>
      </button>
      <button className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full">
        <AiFillDatabase />
        <p>User Log History</p>
      </button>
    </div>
  );
};

export default Sidebar;
