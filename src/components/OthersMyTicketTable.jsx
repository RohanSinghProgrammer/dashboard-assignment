import React, { useState } from "react";
import { othersMyTicketTable } from "../data";
import OthersMyTicketTableItem from "./OthersMyTicketTableItem";
import { FaDownload } from "react-icons/fa";
import ModalLayout from "../layouts/ModalLayout";
import TicketDetailsModal from "./TicketDetailsModal";

const OthersMyTicketTable = () => {
  const [ticketDetailsModal, setTicketDetailsModal] = useState(false)
  return (
    <div className="w-full">
      {/* ----------------------- TICKET DETAILS MODAL ----------------------- */}
      <ModalLayout open={ticketDetailsModal} setOpen={setTicketDetailsModal}>
        <TicketDetailsModal setOpen={setTicketDetailsModal} />
      </ModalLayout>
      <button className="w-full flex justify-end mb-2">
        <FaDownload />
      </button>
      <table className="w-full border-t-2 border-black">
        <thead>
          <tr>
            {othersMyTicketTable.map((item, index) => (
              <th className="py-4" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <OthersMyTicketTableItem setOpen={setTicketDetailsModal} />
          <OthersMyTicketTableItem setOpen={setTicketDetailsModal} />
          <OthersMyTicketTableItem setOpen={setTicketDetailsModal} />
          <OthersMyTicketTableItem setOpen={setTicketDetailsModal} />
          <OthersMyTicketTableItem setOpen={setTicketDetailsModal} />
        </tbody>
      </table>
    </div>
  );
};

export default OthersMyTicketTable;
