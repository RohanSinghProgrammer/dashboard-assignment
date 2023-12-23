import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginLayout = () => {
  const userRole = localStorage.getItem("userRole");
  return userRole ? (
    <Navigate to="/" />
  ) : (
    <>
      <ToastContainer autoClose={2000} />
      <div className="bg-ui-turquoise h-screen grid place-items-center">
        <div className="py-12 px-24 bg-ui-light-turquoise">{<Outlet />}</div>
      </div>
    </>
  );
};

export default LoginLayout;
