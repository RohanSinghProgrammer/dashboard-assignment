import React, { useState } from "react";
import TicketTableItem from "./TicketTableItem";
import { myTicketsList } from "../data";
import ModalLayout from "../layouts/ModalLayout";
import TicketDetailsModal from "./TicketDetailsModal";

const UserMyTicketTable = ({ data }) => {
  const [ticketDetailsModal, setTicketDetailsModal] = useState(false);
  return (
    <div className="w-full">
      {/* ----------------------- TICKET DETAILS MODAL ----------------------- */}
      <ModalLayout open={ticketDetailsModal} setOpen={setTicketDetailsModal}>
        <TicketDetailsModal setOpen={setTicketDetailsModal} />
      </ModalLayout>
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
            <TicketTableItem {...item} openTicketDetailsModal={setTicketDetailsModal} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMyTicketTable;
