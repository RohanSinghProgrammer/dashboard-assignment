import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleLogin = async (e) => {
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    if (username.length < 3 || password.length < 3)
      return toast.error("All fields are required!");
    try {
      let res = await axios.post("http://localhost:4000/api/v1/auth/login", {
        username,
        password
      });
      let userRole = res.data.user.role
      const hashedRole = CryptoJS.AES.encrypt(userRole, "secretKey").toString();
      localStorage.setItem("userRole", hashedRole);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (e) {
      toast.error(e?.response?.data?.message)
    }
  };
  return (
    <div>
      <h2 className="font-bold italic text-2xl mb-8 text-center">
        Helpdesk System
      </h2>
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-8 w-72 items-center"
      >
        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          className="p-2 border border-black focus:outline-none w-full"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 border border-black focus:outline-none w-full"
          required
        />
        <button
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
