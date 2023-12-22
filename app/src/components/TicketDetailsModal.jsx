import React from "react";
import ProtectedComponents from "../utils/ProtectedComponents";

const TicketDetailsModal = ({ setOpen }) => {
  return (
    <div className="w-96">
      <h2 className="text-center font-semibold text-xl mb-4">Ticket Details</h2>
      <div>
        <p>
          Ticket No: <span>123456</span>
        </p>
        <p>Date:</p>
        <p>Name:</p>
        <p>Dept:</p>
      </div>
      <div className="mt-2">
        <p>Title:</p>
        <p>Description:</p>
        <p>Category:</p>
        <p>Type:</p>
        <p>Priority:</p>
        <p>Status:</p>
        <p>Attachment:</p>
      </div>
      <div className="mt-4 flex justify-evenly">
        <ProtectedComponents roles={["operationTeam", "technicalSupport"]}>
          <button className="px-6 py-2 rounded-md bg-blue-500">Update</button>
        </ProtectedComponents>
        <button
          onClick={() => setOpen(false)}
          className="px-6 py-2 rounded-md bg-green-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
