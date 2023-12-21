import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SiNike } from "react-icons/si";

const ApprovalTicketItem = () => {
  return (
    <tr className="odd:bg-gray-300 even:bg-gray-100 border-b">
      <td className="px-6 py-2">1234</td>
      <td className="px-6 py-2">Login Issue</td>
      <td className="px-6 py-2">Access Issue</td>
      <td className="px-6 py-2">High</td>
      <td className="px-6 py-2">13/08/2021</td>
      <td className="px-6 py-2 flex space-x-2 w-full items-center justify-evenly pt-3">
        <button>
          <SiNike className="-rotate-12" />
        </button>
        <button>
          <AiOutlineClose />
        </button>
      </td>
      <td className="px-6 py-2">
        <select name="assignedTo" id="assignedTo">
          <option value="rohan">Rohan Singh</option>
          <option value="ravi">Ravi Sharma</option>
          <option value="raju">Raju Ghosh</option>
        </select>
      </td>
    </tr>
  );
};

export default ApprovalTicketItem;
