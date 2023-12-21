import React from "react";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";
import {
  FaAngleRight,
  FaDatabase,
  FaTicketAlt,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import SelectionSidebarArrow from "./SelectionSidebarArrow";
import { Link, useLocation } from "react-router-dom";
import { BiSolidUserVoice } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { ImPower } from "react-icons/im";
import ProtectedComponents from "../utils/ProtectedComponents";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-72 bg-ui-gray h-full p-4 space-y-1 font-semibold">
      {/* ------------------------- DASHBOARD ------------------------- */}
      <Link
        to={"/"}
        className="flex items-center tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
      >
        {pathname.length == 1 && <FaAngleRight className="mr-2" />}
        <MdOutlineDashboard />
        <p className="ml-1">Dashboard</p>
      </Link>
      <ProtectedComponents roles={["admin"]}>
        {/* ------------------------- DATABASE ------------------------- */}
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
        {/* ------------------------- SETTINGS ------------------------- */}
        <Link
          to={"/settings"}
          className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
        >
          <SelectionSidebarArrow name={"settings"} />
          <MdSettings />
          <p>Settings</p>
        </Link>
        {/* ------------------------- USER LOG HISTORY ------------------------- */}
        <Link
          to={"/userLog"}
          className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
        >
          <SelectionSidebarArrow name={"userLog"} />
          <AiFillDatabase />
          <p>User Log History</p>
        </Link>
      </ProtectedComponents>
      {/* ------------------------- NEW TICKET ------------------------- */}
      <ProtectedComponents roles={["user"]}>
        <Link
          to={"/newTicket"}
          className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
        >
          <SelectionSidebarArrow name={"newTicket"} />
          <IoTicketSharp />
          <p>New Ticket</p>
        </Link>
      </ProtectedComponents>
      {/* ------------------------- TICKET APPROVAL ------------------------- */}
      <ProtectedComponents roles={["operationTeam"]}>
        <Link
          to={"/ticketApproval"}
          className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
        >
          <SelectionSidebarArrow name={"ticketApproval"} />
          <FaTicketAlt />
          <p>Ticket Approval</p>
        </Link>
      </ProtectedComponents>
      {/* ------------------------- MY TICKET ------------------------- */}
      <ProtectedComponents
        roles={["user", "operationTeam", "technicalSupport"]}
      >
        <Link
          to={"/myTicket"}
          className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
        >
          <SelectionSidebarArrow name={"myTicket"} />
          <BsTicketPerforatedFill />
          <p>My Ticket</p>
        </Link>
      </ProtectedComponents>
      {/* ------------------------- PERFORMANCE  ------------------------- */}
      <ProtectedComponents roles={["operationTeam", "technicalSupport"]}>
        <Link
          to={"/performance"}
          className="flex items-center space-x-2 tracking-wide p-2 rounded-md hover:bg-gray-300 w-full"
        >
          <SelectionSidebarArrow name={"performance"} />
          <ImPower />
          <p>Performance</p>
        </Link>
      </ProtectedComponents>
    </div>
  );
};

export default Sidebar;
