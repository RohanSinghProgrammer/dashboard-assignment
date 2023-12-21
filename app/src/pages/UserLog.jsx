import React from "react";
import TableItem from "../components/TableItem";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { headerList } from "../data";

const UserLog = () => {
  return (
    <div className="p-6 h-full overflow-y-scroll">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        User Log History
      </h2>
      {/* ------------------------------ PAGE HEADER ------------------------------ */}
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
      <table className="border-t-2 border-black w-full">
        <thead>
          <tr>
            {headerList.map((item,index) => <th key={index} className="py-2">{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {Array(5).fill(0).map((item,index)=> <TableItem key={index} index={index} />)}
        </tbody>
      </table>
      {/* ----------------------------- PAGE FOOTER ----------------------------- */}
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

export default UserLog;
