import React from "react";

const EditUser = () => {
  return (
    <div className="p-6 h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        User Profile
      </h2>
      <div className="mt-4">
        <button className="bg-ui-turquoise px-4 py-2">Edit Account</button>
        <form>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="username"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="password"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Current Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="new-password"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              New Password
            </label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="confirm-password"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="email"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="name"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Real Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="access-level"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Access Level
            </label>
            <input
              type="text"
              name="access-level"
              id="access-level"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex border-t-4 border-gray-400">
            <label
              htmlFor="project-access-level"
              className="w-1/2 border-r border-white text-white bg-gray-500 px-4 py-2"
            >
              Project Access Level
            </label>
            <input
              type="text"
              name="project-project-access-level"
              id="project-access-level"
              className="w-1/2 px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex bg-gray-300 py-2">
            <div className="w-1/2 border-r border-white px-6">
              <button className="bg-ui-turquoise px-8 py-2">Update User</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
