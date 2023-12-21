import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import UserMyTicketTable from "../components/UserMyTicketTable";
import OthersMyTicketTable from "../components/OthersMyTicketTable";
import ProtectedComponents from "../utils/ProtectedComponents";

const MyTicket = () => {
  return (
    <div className="py-4 px-12 h-full overflow-y-scroll">
      <h2 className="text-center text-2xl font-semibold">List of Ticket</h2>
      {/* ------------------------------ SEARCH ------------------------------ */}
      <form className="flex bg-gray-100 py-2 px-4 my-4 w-fit rounded-lg">
        <input
          type="text"
          placeholder="Find ticket"
          className="bg-transparent focus:outline-none"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {/* ------------------------------ TABLE HEADER ------------------------------ */}
      <div className="px-2 flex items-center space-x-2 caret-gray-200 mb-4">
        <p>Show:</p>
        <select name="items" id="items" className="border border-black px-1">
          <option value="5">5</option>
          <option value="8">8</option>
          <option selected value="10">
            10
          </option>
        </select>
        <p>Entries</p>
      </div>
      {/* --------------------------------- TABLE --------------------------------- */}
      <ProtectedComponents roles={["user"]}>
        <UserMyTicketTable />
      </ProtectedComponents>
      <ProtectedComponents roles={["operationTeam", "technicalSupport"]}>
        <OthersMyTicketTable />
      </ProtectedComponents>
      {/* ----------------------------- TABLE FOOTER ----------------------------- */}
      <div className="flex items-center justify-between mt-2 px-2">
        <p>Showing 1 to 5 of 5 entries</p>
        <div className="flex items-center space-x-2">
          <button>
            <FaAnglesLeft />
          </button>
          <p>1</p>
          <button>
            <FaAnglesRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
