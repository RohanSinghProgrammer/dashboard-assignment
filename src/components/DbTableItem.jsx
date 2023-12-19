import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const DbTableItem = () => {
  return (
    <tr className="odd:bg-gray-300 even:bg-gray-100 border-b">
      <td className="px-6 py-2">
        <input type="checkbox" className="caret- h-4 w-4" />
      </td>
      <td className="pl-16 py-2">ABC123</td>
      <td className="pl-16 py-2">Abu</td>
      <td className="pl-16 py-2">IT</td>
      <td className="pl-16 py-2">Software</td>
      <td className="px-6 py-2">
        <div className="flex w-full justify-evenly text-xl">
            <button><MdEdit /></button>
            <button><MdDelete /></button>
        </div>
      </td>
    </tr>
  );
};

export default DbTableItem;
