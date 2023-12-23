import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import UserMyTicketTable from "../components/UserMyTicketTable";
import OthersMyTicketTable from "../components/OthersMyTicketTable";
import ProtectedComponents from "../utils/ProtectedComponents";
import { toast } from "react-toastify";
import axios from "axios";

const MyTicket = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const getData = async () => {
    try {
      let url = `http://localhost:4000/api/v1/tickets?page=${page}&limit=${limit}`;
      let res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      toast.error(e.message);
    }
  };
  useEffect(() => {
    getData();
  }, [page, limit]);

  return (
    <div className="py-4 px-12 h-full overflow-y-scroll">
      <h2 className="text-center text-2xl font-semibold">List of Ticket</h2>
      {/* ------------------------------ SEARCH ------------------------------ */}
      <form className="flex bg-gray-100 py-2 px-4 my-4 w-fit rounded-lg">
        <input
          type="text"
          placeholder="Find ticket"
          className="bg-transparent focus:outline-none"
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      {/* ------------------------------ TABLE HEADER ------------------------------ */}
      <div className="px-2 flex items-center space-x-2 caret-gray-200 mb-4">
        <p>Show:</p>
        <select
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          name="items"
          id="items"
          className="border border-black px-1"
        >
          <option value="5">5</option>
          <option value="8">8</option>
          <option selected value="10">
            10
          </option>
        </select>
        <p>Entries</p>
      </div>
      {/* --------------------------------- TABLE --------------------------------- */}
      <ProtectedComponents roles={["user"]}>
        {data && <UserMyTicketTable data={data.data} />}
      </ProtectedComponents>
      <ProtectedComponents roles={["operationTeam", "technicalSupport"]}>
        <OthersMyTicketTable />
      </ProtectedComponents>
      {/* ----------------------------- TABLE FOOTER ----------------------------- */}
      <div className="flex items-center justify-between mt-2 px-2">
        <p>
          Showing 1 to {data?.dataLength} of {data?.dataLength} entries
        </p>
        <div className="flex items-center space-x-2">
          <button
            disabled={page == 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <FaAnglesLeft />
          </button>
          <p>{page}</p>
          <button
            disabled={data?.data.length < limit}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <FaAnglesRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
