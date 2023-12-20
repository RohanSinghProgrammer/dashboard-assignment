import React from "react";
import TicketTableItem from "./TicketTableItem";
import { myTicketsList } from "../data";

const UserMyTicketTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {myTicketsList.map((item, index) => (
            <th className="py-4" key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <TicketTableItem />
        <TicketTableItem />
        <TicketTableItem />
        <TicketTableItem />
        <TicketTableItem />
      </tbody>
    </table>
  );
};

export default UserMyTicketTable;
