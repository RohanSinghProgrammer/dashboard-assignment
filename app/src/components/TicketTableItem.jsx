import React from "react";
import { FaStar } from "react-icons/fa";

const TicketTableItem = ({openTicketDetailsModal}) => {
  return (
    <tr className="odd:bg-gray-300 even:bg-gray-100 border-b">
      <td onClick={()=> openTicketDetailsModal(true)} className="px-6 py-2 cursor-pointer text-blue-500 underline">1234</td>
      <td className="px-6 py-2">Login issue</td>
      <td className="px-6 py-2">
        <button className="bg-green-400 p-1 rounded-md">In Progress</button>
      </td>
      <td className="px-6 py-2">Tech Support</td>
      <td className="px-6 py-2">13/08/2021</td>
      <td className="h-full">
        <div className="flex justify-center space-x-0.5 mb-4 pt-3">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <FaStar className="text-gray-500 text-xl" />
              </div>
            ))}
        </div>
      </td>
    </tr>
  );
};

export default TicketTableItem;
