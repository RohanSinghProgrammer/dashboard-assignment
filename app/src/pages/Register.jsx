import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/login");
  };
  return (
    <div>
      <h2 className="font-bold italic text-2xl mb-2 text-center">
        Helpdesk System
      </h2>
      <p className="text-center mb-4 text-sm">Sign up here</p>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col space-y-8 w-72 items-center"
      >
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
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-black focus:outline-none w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white w-fit px-16 py-3 rounded-xl"
        >
          Sign In
        </button>
      </form>
      <div className="w-full flex justify-between mt-6">
        <Link to={"/login/resetPassword"} className="font-medium text-red-600">
          Forgot Password
        </Link>
        <Link to={"/login"} className="font-medium">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
