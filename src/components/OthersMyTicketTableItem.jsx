import React from "react";
import { FaDownload, FaEdit, FaUserPlus } from "react-icons/fa";

const OthersMyTicketTableItem = ({ setOpen }) => {
  return (
    <tr className="odd:bg-gray-300 even:bg-gray-100 border-b">
      <td className="px-2 py-2">
        <button
          onClick={() => setOpen(true)}
          className="underline text-blue-500"
        >
          1234
        </button>
      </td>
      <td className="px-2 py-2">Login Issue</td>
      <td className="px-2 py-2">Access Issue</td>
      <td className="px-2 py-2">High</td>
      <td className="px-2 py-2">13/08/2021</td>
      <td className="px-2 py-2">
        <button className="p-1 rounded-md bg-green-500">In Progress</button>
      </td>
      <td className="px-2 py-2"></td>
      <td className="px-2 py-2">
        <div className="flex items-center space-x-2 pt-0.5">
          <button>
            <FaEdit className="text-lg" />
          </button>
          <button>
            <FaUserPlus className="text-lg" />
          </button>
          <button>
            <FaDownload />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OthersMyTicketTableItem;
