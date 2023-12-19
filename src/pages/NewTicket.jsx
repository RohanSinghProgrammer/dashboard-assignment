import React from "react";

const NewTicket = () => {
  return (
    <div className="h-full p-4">
      <h2 className="text-center text-2xl font-semibold">Create New Ticket</h2>
      {/* --------------------------------- FORM --------------------------------- */}
      <form className="mt-4">
        <div className="grid grid-cols-2 grid-rows-2 space-y-4">
          <div className="flex items-center space-x-4 justify-between px-12 mt-4">
            <label htmlFor="ticket-no" className="text-lg">
              Ticket No.
            </label>
            <input
              type="number"
              name="ticket-no"
              id="ticket-no"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
            />
          </div>
          <div className="flex items-center space-x-4 justify-between px-12">
            <label htmlFor="date" className="text-lg">
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
            />
          </div>
          <div className="flex items-center space-x-4 justify-between px-12">
            <label htmlFor="name" className="text-lg">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
            />
          </div>
          <div className="flex items-center space-x-4 justify-between px-12">
            <label htmlFor="department" className="text-lg">
              Department:
            </label>
            <input
              type="text"
              name="department"
              id="department"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
            />
          </div>
        </div>
        <div className="px-12 mt-4">
          <label htmlFor="subject" className="text-lg">
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
          />
        </div>
        <div className="flex px-12 py-4 gap-8">
          <div className="w-1/2 space-y-2">
            <div>
              <label htmlFor="category" className="text-lg">
                Category:
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="type" className="text-lg">
                Type:
              </label>
              <input
                type="text"
                name="type"
                id="type"
                className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
              />
            </div>
            <div>
              <label htmlFor="property" className="text-lg">
                Property:
              </label>
              <input
                type="text"
                name="property"
                id="property"
                className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="desc" className="text-lg">Description:</label>
            <textarea name="desc" id="desc" className="h-full w-full rounded-md bg-gray-200 focus:outline-none p-4"></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
