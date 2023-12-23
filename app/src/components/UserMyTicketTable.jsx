import React from "react";
import TicketTableItem from "./TicketTableItem";
import { myTicketsList } from "../data";

const UserMyTicketTable = ({ data }) => {
  return (
    <div className="w-full">
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
          {data.map((item, index) => (
            <TicketTableItem {...item} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMyTicketTable;
