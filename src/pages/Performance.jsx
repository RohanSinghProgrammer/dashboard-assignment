import React from "react";
import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import OperationCard from "../components/OperationCard";

const Performance = () => {
  return (
    <div className="p-6 h-full overflow-y-scroll">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Performance</h2>
      <div className="py-6 flex space-x-8">
        <div className="w-1/2">
          <div className="flex gap-4">
            <div className="w-1/3 p-4 rounded-lg bg-gray-200 grid place-items-center">
              <FaUser
                className="
            text-8xl"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold px-2">Operation Name</h3>
              <div className="bg-gray-200  p-4 text-sm rounded-lg">
                <p>Contact No: 1234567890</p>
                <p>Department: ABC</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg mt-4">
            <div className="flex justify-between">
              <p>Total Ticket Handle</p>
              <p>5</p>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <p>Ticket Solved</p>
              <p>2</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Ticket Pending</p>
              <p>1</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Ticket in progress</p>
              <p>2</p>
            </div>
            <div className="flex justify-between text-sm items-center">
              <p>Rating</p>
              <div className="flex items-center pt-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar className="text-yellow-500" />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 space-y-7">
          <OperationCard />
          <OperationCard />
          <OperationCard />
        </div>
      </div>
    </div>
  );
};

export default Performance;
