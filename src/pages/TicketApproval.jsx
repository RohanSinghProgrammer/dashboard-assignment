import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { ticketApprovalList } from "../data";
import ApprovalTicketItem from "../components/ApprovalTicketItem";

const TicketApproval = () => {
  return (
    <div className="p-6 h-full overflow-y-scroll">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Ticket Approval
      </h2>
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
      {/* ------------------------------ Table HEADER ------------------------------ */}
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
      <table className="w-full">
        <thead>
          <tr>
            {ticketApprovalList.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <ApprovalTicketItem key={index} />
            ))}
        </tbody>
      </table>
      {/* ----------------------------- TABLE FOOTER ----------------------------- */}
      <div className="flex items-center justify-between mt-2">
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

export default TicketApproval;
