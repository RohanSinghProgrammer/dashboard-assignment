import React from "react";
import { othersMyTicketTable } from "../data";
import OthersMyTicketTableItem from "./OthersMyTicketTableItem";
import { FaDownload } from "react-icons/fa";

const OthersMyTicketTable = () => {
  return (
    <div className="w-full">
        <button className="w-full flex justify-end mb-2">
            <FaDownload />
        </button>
    <table className="w-full border-t-2 border-black">
      <thead>
        <tr>
          {othersMyTicketTable.map((item, index) => (
            <th className="py-4" key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <OthersMyTicketTableItem />
        <OthersMyTicketTableItem />
        <OthersMyTicketTableItem />
        <OthersMyTicketTableItem />
        <OthersMyTicketTableItem />
      </tbody>
    </table>
    </div>
  );
};

export default OthersMyTicketTable;
