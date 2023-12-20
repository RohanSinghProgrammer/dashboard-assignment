import React, { useRef } from "react";
import { toast } from "react-toastify";

const LoginModal = ({ setUserRole, setOpen }) => {
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let value = ref.current.value;
    setUserRole(value);
    toast.success("Role selected! kindly Sign in again.")
    setOpen(false)
  };
  return (
    <div className="w-96">
      <h2 className="text-center text-2xl font-bold">
        Select your desire role
      </h2>
      <p className="text-center text-gray-600 text-sm mt-1">
        Kindly select your desire role before access the dashboard <br />
        {"("}NOTE: This modal is used because the app doesn't contain any
        backend till now, It will be removed in future{")"}
      </p>
      <form onSubmit={handleSubmit} className="my-6 px-3">
        <div className="flex items-center justify-between">
          <label htmlFor="role" className="text-lg font-semibold">
            Select Role
          </label>
          <select
            ref={ref}
            name="role"
            id="role"
            className="p-2 border rounded-md"
            defaultValue={"1"}
          >
            <option value="1">User</option>
            <option value="2">Operation Team</option>
            <option value="3">Technical Support</option>
            <option value="4">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-4 rounded-md bg-ui-turquoise text-white font-semibold w-full mt-6"
        >
          Select
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
