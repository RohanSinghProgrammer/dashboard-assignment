import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

const CloseTicketModal = ({ setOpen }) => {
  return (
    <div className="w-[30rem]">
      <h2 className="font-semibold text-2xl text-center mb-4">
        My Ticket - Close Ticket
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="px-8 py-10 rounded-md bg-ui-turquoise grid place-items-center">
        <div className="flex justify-evenly gap-4">
          <div className="w-2/5 space-y-2">
            <input
              type="text"
              name="ticketNo"
              id="ticketNo"
              placeholder="Ticket No."
              className="p-2 rounded-md w-full bg-white focus:outline-none"
            />
            <input
              type="text"
              name="ticketNo"
              id="ticketNo"
              placeholder="Team name."
              className="p-2 rounded-md w-full bg-white focus:outline-none"
            />
            <div className="flex items-center bg-white rounded-md">
              <input
                type="text"
                name="ticketNo"
                id="ticketNo"
                placeholder="Team Member"
                className="p-2 rounded-md w-full bg-white focus:outline-none"
              />
              <FaUserPlus className="text-2xl mx-2" />
            </div>
          </div>
          <textarea
            className="bg-white rounded-md focus:outline-none p-2 w-3/5"
            placeholder="Remark"
          ></textarea>
        </div>
        <div className="w-full space-x-6 flex justify-center items-center mt-4">
          <button type="reset">
            <IoReload className="text-2xl" />
          </button>
          <button onClick={()=> setOpen(false)} type="submit" className="px-4 py-2 rounded-md bg-gray-200">
            Close Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default CloseTicketModal;
