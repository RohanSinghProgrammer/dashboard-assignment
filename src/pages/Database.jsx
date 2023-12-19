import React from "react";
import { FaSearch } from "react-icons/fa";
import { DBHeaderList } from "../data";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import DbTableItem from "../components/DbTableItem";

const Database = () => {
  return (
    <div className="h-full p-6 overflow-y-scroll">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Database</h2>
      {/* ------------------------------ TABS ------------------------------ */}
      <div className="flex">
        <div className="w-1/3 bg-ui-turquoise p-1 text-gray-900 border border-gray-500 text-center font-semibold text-xl">
          User
        </div>
        <div className="w-1/3 bg-ui-turquoise p-1 text-gray-900 border border-gray-500 text-center font-semibold text-xl">
          Team Operation
        </div>
        <div className="w-1/3 bg-ui-turquoise p-1 text-gray-900 border border-gray-500 text-center font-semibold text-xl">
          Technical Support
        </div>
      </div>
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
      <table className="w-full">
        <thead className="border-t-2 border-gray-400">
          <tr>
            <th className="py-4"></th>
            {DBHeaderList.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <DbTableItem />
          <DbTableItem />
          <DbTableItem />
        </tbody>
      </table>
      {/* ----------------------------- TABLE FOOTER ----------------------------- */}
      <div className="flex items-center justify-between mt-2">
        <p>Showing 1 to 3 of 3 entries</p>
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

export default Database;
