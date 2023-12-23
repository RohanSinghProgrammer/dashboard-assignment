import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useApiConfig } from "../hooks/useApiConfig";
import axios from "axios"

const NewTicket = () => {
  const recaptchaRef = useRef();
  const ticketNoRef = useRef();
  const dateRef = useRef();
  const nameRef = useRef();
  const departmentRef = useRef();
  const subjectRef = useRef();
  const categoryRef = useRef();
  const typeRef = useRef();
  const priorityRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticketNo = ticketNoRef.current.value;
    const date = dateRef.current.value;
    const name = nameRef.current.value;
    const department = departmentRef.current.value;
    const subject = subjectRef.current.value;
    const category = categoryRef.current.value;
    const type = typeRef.current.value;
    const priority = priorityRef.current.value;
    const description = descriptionRef.current.value;
    let reqBody = {
      ticketNo,
      date,
      name,
      department,
      subject,
      category,
      type,
      priority,
      description,
    };
    try {
      let { data } = await axios.post(
        "http://localhost:4000/api/v1/tickets",
        reqBody,
        useApiConfig()
      );
      toast.success("Ticket successfully created!");
      e.target.reset()
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };
  return (
    <div className="h-full p-4 overflow-y-scroll">
      <h2 className="text-center text-2xl font-semibold">Create New Ticket</h2>
      {/* --------------------------------- FORM --------------------------------- */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-2 grid-rows-2 space-y-4">
          <div className="flex items-center space-x-4 justify-between px-12 mt-4">
            <label htmlFor="ticket-no" className="text-lg">
              Ticket No.
            </label>
            <input
              ref={ticketNoRef}
              type="number"
              name="ticket-no"
              id="ticket-no"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
              required
            />
          </div>
          <div className="flex items-center space-x-4 justify-between px-12">
            <label htmlFor="date" className="text-lg">
              Date:
            </label>
            <input
              ref={dateRef}
              type="date"
              name="date"
              id="date"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
              required
            />
          </div>
          <div className="flex items-center space-x-4 justify-between px-12">
            <label htmlFor="name" className="text-lg">
              Name:
            </label>
            <input
              ref={nameRef}
              type="text"
              name="name"
              id="name"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
              required
            />
          </div>
          <div className="flex items-center space-x-4 justify-between px-12">
            <label htmlFor="department" className="text-lg">
              Department:
            </label>
            <input
              ref={departmentRef}
              type="text"
              name="department"
              id="department"
              className="bg-gray-200 rounded-md px-2 py-1 focus:outline-none w-52"
              required
            />
          </div>
        </div>
        <div className="px-12 mt-4">
          <label htmlFor="subject" className="text-lg">
            Subject:
          </label>
          <input
            ref={subjectRef}
            type="text"
            name="subject"
            id="subject"
            className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
            required
          />
        </div>
        <div className="flex px-12 py-4 gap-8">
          <div className="w-1/2 space-y-2">
            <div>
              <label htmlFor="category" className="text-lg">
                Category:
              </label>
              <input
                ref={categoryRef}
                type="text"
                name="category"
                id="category"
                className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
                required
              />
            </div>
            <div>
              <label htmlFor="type" className="text-lg">
                Type:
              </label>
              <input
              ref={typeRef}
                type="text"
                name="type"
                id="type"
                className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
                required
              />
            </div>
            <div>
              <label htmlFor="priority" className="text-lg">
                Priority:
              </label>
              <input
              ref={priorityRef}
                type="text"
                name="priority"
                id="priority"
                className="px-2 py-1 focus:outline-none bg-gray-200 rounded-md w-full mt-2"
                required
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="desc" className="text-lg">
              Description:
            </label>
            <textarea
            ref={descriptionRef}
              name="desc"
              id="desc"
              className="h-full w-full rounded-md bg-gray-200 focus:outline-none p-4 mt-2"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex w-full px-12 my-4 justify-between items-end">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfTeTYpAAAAADY2Sdh_hwq8SoVnpt145-aRmkWL" // this is demo sitekey, we have to add genuine sitekey to use it properly.
          />
          <button
            type="submit"
            className="px-12 py-2 h-fit bg-ui-turquoise rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
