import React from "react";
import { FaStar, FaUserLarge } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        User Profile
      </h2>
      <div className="h-[90%] bg-ui-turquoise rounded-sm grid grid-cols-2 p-12 gap-12">
        <div className="h-fit bg-white rounded-lg p-4 grid place-items-center relative">
          <Link to={"/editUser"} className="absolute top-2 right-4">
            <FaEdit className="text-xl" />
          </Link>
          <div className="p-8 bg-gray-300 rounded-full w-fit mt-4">
            <FaUserLarge className="text-8xl" />
          </div>
          <div className="w-full mt-4">
            <p>Username</p>
            <p>Contact Number</p>
            <p>Email</p>
            <p>Department</p>
          </div>
        </div>
        <form className="bg-white rounded-lg p-4 h-fit">
          <h3 className="text-center font-semibold">Give Your Feedback</h3>
          <input
            type="text"
            placeholder="share your feedback with us."
            className="px-4 py-2 bg-gray-200 w-full my-4"
          />
          <div className="flex justify-center space-x-2 mb-4">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <div key={index}>
                  <FaStar className="text-gray-500 text-xl" />
                </div>
              ))}
          </div>
          <button
            type="submit"
            className="bg-ui-turquoise w-full py-3 rounded-lg font-semibold"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
