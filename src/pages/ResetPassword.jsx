import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div>
      <form className="flex flex-col w-72 items-center">
        <p className="text-center mb-4 text-sm">
          Don't worry, Enter your email below and we will send you a link to
          change password
        </p>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-black focus:outline-none w-full mt-2"
          required
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-green-500 text-white w-fit px-16 py-3 rounded-xl mt-8 cursor-pointer"
        >
          Submit
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 text-white w-fit px-16 py-3 rounded-xl mt-4 cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
