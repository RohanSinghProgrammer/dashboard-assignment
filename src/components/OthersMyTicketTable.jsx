import React, { useState } from "react";
import { othersMyTicketTable } from "../data";
import OthersMyTicketTableItem from "./OthersMyTicketTableItem";
import { FaDownload } from "react-icons/fa";
import ModalLayout from "../layouts/ModalLayout";
import TicketDetailsModal from "./TicketDetailsModal";
import CloseTicketModal from "./CloseTicketModal";
import CreateTeamModal from "./CreateTeamModal";

const OthersMyTicketTable = () => {
  const [ticketDetailsModal, setTicketDetailsModal] = useState(false)
  const [closetTicketModal, setClosetTicketModal] = useState(false)
  const [createTeamModal, setCreateTeamModal] = useState(false)
  return (
    <div className="w-full">
      {/* ----------------------- TICKET DETAILS MODAL ----------------------- */}
      <ModalLayout open={ticketDetailsModal} setOpen={setTicketDetailsModal}>
        <TicketDetailsModal setOpen={setTicketDetailsModal} />
      </ModalLayout>
      {/* ----------------------- CLOSE TICKET MODAL ----------------------- */}
      <ModalLayout open={closetTicketModal} setOpen={setClosetTicketModal}>
        <CloseTicketModal setOpen={setClosetTicketModal} />
      </ModalLayout>
      {/* ----------------------- CREATE TEAM MODAL ----------------------- */}
      <ModalLayout open={createTeamModal} setOpen={setCreateTeamModal}>
        <CreateTeamModal setOpen={setCreateTeamModal} />
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
          <OthersMyTicketTableItem openTicketDetailsModal={setTicketDetailsModal} openCloseTicketModal={setClosetTicketModal} openCreateTeamModal={setCreateTeamModal} />
          <OthersMyTicketTableItem openTicketDetailsModal={setTicketDetailsModal} openCloseTicketModal={setClosetTicketModal} openCreateTeamModal={setCreateTeamModal} />
          <OthersMyTicketTableItem openTicketDetailsModal={setTicketDetailsModal} openCloseTicketModal={setClosetTicketModal} openCreateTeamModal={setCreateTeamModal} />
          <OthersMyTicketTableItem openTicketDetailsModal={setTicketDetailsModal} openCloseTicketModal={setClosetTicketModal} openCreateTeamModal={setCreateTeamModal} />
          <OthersMyTicketTableItem openTicketDetailsModal={setTicketDetailsModal} openCloseTicketModal={setClosetTicketModal} openCreateTeamModal={setCreateTeamModal} />
        </tbody>
      </table>
    </div>
  );
};

export default OthersMyTicketTable;
