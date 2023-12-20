import React from "react";
import { Link } from "react-router-dom";
import CryptoJS from 'crypto-js';

const Login = () => {
  const handleLogin = () => {
    let role = null;
    let rolesArr = ["1", "2", "3", "4"];
    do {
      role = prompt(
        "Select serial number of your desire role: \n 1. User,\n 2. Operation Team,\n 3. Technical Support,\n 4. Admin "
      );
    } while (!rolesArr.includes(role));
    const hashedRole = CryptoJS.AES.encrypt(role, "secretKey").toString();
    localStorage.setItem("userRole", hashedRole);
    window.location.href = "/";
  };
  return (
    <div>
      <h2 className="font-bold italic text-2xl mb-8 text-center">
        Helpdesk System
      </h2>
      <form className="flex flex-col space-y-8 w-72 items-center">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-black focus:outline-none w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-black focus:outline-none w-full"
          required
        />
        <button
          onClick={handleLogin}
          type="submit"
          className="bg-green-500 text-white w-fit px-16 py-3 rounded-xl"
        >
          Sign In
        </button>
        <div className="w-full flex justify-between">
          <Link
            to={"/login/resetPassword"}
            className="font-medium text-red-600"
          >
            Forgot Password
          </Link>
          <Link to={"/login/register"} className="font-medium">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
