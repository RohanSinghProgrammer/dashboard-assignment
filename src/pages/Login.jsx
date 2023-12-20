import React, { useState } from "react";
import { Link } from "react-router-dom";
import CryptoJS from "crypto-js";
import ModalLayout from "../layouts/ModalLayout";
import LoginModal from "../components/LoginModal";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [userRole, setUserRole] = useState("0");
  const handleLogin = () => {
    setOpen(true);
    if (userRole != "0") {
      setOpen(false);
      const hashedRole = CryptoJS.AES.encrypt(userRole, "secretKey").toString();
      localStorage.setItem("userRole", hashedRole);
      window.location.href = "/";
    }
  };
  return (
    <div>
      <ModalLayout open={open} setOpen={setOpen}>
        <LoginModal setUserRole={setUserRole} setOpen={setOpen} />
      </ModalLayout>
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
