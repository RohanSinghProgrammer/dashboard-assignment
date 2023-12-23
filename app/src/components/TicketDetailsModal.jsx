import React from "react";
import ProtectedComponents from "../utils/ProtectedComponents";

const TicketDetailsModal = (props) => {
  const {
    setOpen,
    ticketNo,
    date,
    name,
    department,
    subject,
    category,
    description,
    type,
    priority,
    status,
  } = props;
  return (
    <div className="w-96">
      <h2 className="text-center font-semibold text-xl mb-4">Ticket Details</h2>
      <div>
        <p className="font-semibold">
          Ticket No: <span className="ml-2 text-gray-700">{ticketNo}</span>
        </p>
        <p className="font-semibold">
          Date: <span className="ml-2 text-gray-700">{new Date(date).toLocaleDateString()}</span>
        </p>
        <p className="font-semibold">
          Name: <span className="ml-2 text-gray-700">{name}</span>
        </p>
        <p className="font-semibold">
          Dept: <span className="ml-2 text-gray-700">{department}</span>
        </p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">Title: <span className="ml-2 text-gray-700">{subject}</span></p>
        <p className="font-semibold">Description: <span className="ml-2 text-gray-700">{description}</span> </p>
        <p className="font-semibold">Category: <span className="ml-2 text-gray-700">{category}</span> </p>
        <p className="font-semibold">Type: <span className="ml-2 text-gray-700">{type}</span> </p>
        <p className="font-semibold">Priority: <span className="ml-2 text-gray-700">{priority}</span> </p>
        <p className="font-semibold">Status: <span className="ml-2 text-gray-700">{status}</span> </p>
        <p className="font-semibold">Attachment: <span className="ml-2 text-gray-700">null</span></p>
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
