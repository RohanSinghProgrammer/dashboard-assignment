import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import ToggleButton from "../components/ToggleButton";

const Settings = () => {
  return (
    <div className="p-6 h-full overflow-y-scroll">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Settings</h2>
      <div className="pr-4">
        {/* ------------------------------- GENERAL ------------------------------- */}
        <div>
          {/* ----------------- TITLE ----------------- */}
          <div className="flex bg-ui-turquoise items-center space-x-4 px-4 py-2 font-semibold">
            <h3>General</h3>
            <FaChevronDown />
          </div>
          {/* ----------------- ITEMS ----------------- */}
          <div className="pl-8">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-200">
              <p>Language</p>
              <ToggleButton />
            </div>
            <div className="px-4 py-2 flex justify-between items-center bg-gray-300">
              <p>Data Backup</p>
              <input
                type="checkbox"
                checked
                className="h-5 w-5 mr-6 accent-white"
              />
            </div>
          </div>
        </div>
        {/* ------------------------------- CONNECT TO ------------------------------- */}
        <div>
          {/* ----------------- TITLE ----------------- */}
          <div className="flex bg-ui-turquoise items-center space-x-4 px-4 py-2 font-semibold">
            <h3>Connect To</h3>
            <FaChevronDown />
          </div>
          {/* ----------------- ITEMS ----------------- */}
          <div className="pl-8">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-200">
              <p>GoDash</p>
              <input
                type="checkbox"
                checked
                className="h-5 w-5 mr-6 accent-white"
              />
            </div>
            <div className="px-4 py-2 flex justify-between items-center bg-gray-300">
              <p>SuperController</p>
              <input
                type="checkbox"
                checked
                className="h-5 w-5 mr-6 accent-white"
              />
            </div>
          </div>
        </div>
        {/* ------------------------------- EMAIL ------------------------------- */}
        <div>
          {/* ----------------- TITLE ----------------- */}
          <div className="flex bg-ui-turquoise items-center space-x-4 px-4 py-2 font-semibold">
            <h3>Email</h3>
            <FaChevronDown />
          </div>
          {/* ----------------- ITEMS ----------------- */}
          <div className="pl-8">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-200">
              <p>Enable SMTP</p>
              <input
                type="checkbox"
                checked
                className="h-5 w-5 mr-6 accent-white"
              />
            </div>
          </div>
        </div>
        {/* ------------------------------- AUTHORIZATION ------------------------------- */}
        <div>
          {/* ----------------- TITLE ----------------- */}
          <div className="flex bg-ui-turquoise items-center space-x-4 px-4 py-2 font-semibold">
            <h3>Email</h3>
            <FaChevronDown />
          </div>
          {/* ----------------- ITEMS ----------------- */}
          <div className="pl-8">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-200">
              <p>Edit authorization</p>
              <input
                type="checkbox"
                checked
                className="h-5 w-5 mr-6 accent-white"
              />
            </div>
            <div className="px-4 py-2 flex justify-between items-center caret-slate-200">
              <p>Authorization Level</p>
              <select name="auth" id="auth" className="text-sm bg-gray-200">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
        </div>
        {/* ------------------------------- NOTIFICATION ------------------------------- */}
        <div>
          {/* ----------------- TITLE ----------------- */}
          <div className="flex bg-ui-turquoise items-center space-x-4 px-4 py-2 font-semibold">
            <h3>Notification</h3>
            <FaChevronDown />
          </div>
          {/* ----------------- ITEMS ----------------- */}
          <div className="pl-8">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-200">
              <p>Enable Notification</p>
              <input
                type="checkbox"
                checked
                className="h-5 w-5 mr-6 accent-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
