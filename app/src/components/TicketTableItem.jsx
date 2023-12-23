import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ModalLayout from "../layouts/ModalLayout";
import TicketDetailsModal from "./TicketDetailsModal";

const TicketTableItem = (props) => {
  const {
    ticketNo,
    status,
    name,
    category,
    rating,
    date,
    department,
    subject,
    description,
    type,
    priority,
  } = props;
  const [ticketDetailsModal, setTicketDetailsModal] = useState(false);
  return (
    <tr className="odd:bg-gray-300 even:bg-gray-100 border-b">
      {/* ----------------------- TICKET DETAILS MODAL ----------------------- */}
      <ModalLayout open={ticketDetailsModal} setOpen={setTicketDetailsModal}>
        <TicketDetailsModal
          ticketNo={ticketNo}
          date={date}
          name={name}
          department={department}
          subject={subject}
          setOpen={setTicketDetailsModal}
          type={type}
          description={description}
          priority={priority}
          status={status}
        />
      </ModalLayout>
      <td
        onClick={() => setTicketDetailsModal(true)}
        className="px-6 py-2 cursor-pointer text-blue-500 underline"
      >
        {ticketNo}
      </td>
      <td className="px-6 py-2">{name}</td>
      <td className="px-6 py-2">
        <button className="bg-green-400 p-1 rounded-md">{status}</button>
      </td>
      <td className="px-6 py-2">
        {category == "technical" ? "Tech Support" : "Non Tech Support"}
      </td>
      <td className="px-6 py-2">{new Date(date).toLocaleDateString()}</td>
      <td className="h-full">
        <div className="flex justify-center space-x-0.5 mb-4 pt-3">
          {Array(Math.floor(rating))
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <FaStar className="text-yellow-400 text-xl" />
              </div>
            ))}
          {Array(5 - Math.floor(rating))
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <FaStar className="text-gray-500 text-xl" />
              </div>
            ))}
        </div>
      </td>
    </tr>
  );
};

export default TicketTableItem;
