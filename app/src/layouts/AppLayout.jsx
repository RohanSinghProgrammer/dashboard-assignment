import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCurrentRole from "../hooks/useCurrentRole";

const AppLayout = () => {
    const role = useCurrentRole()
  
  return role == "0" ?  (
    <div className="h-screen relative">
      <Navbar />
      <ToastContainer autoClose={2000} />
      <div className="flex w-full h-[90%]">
        <Sidebar />
        <div className="w-full">
          <div className="h-[92%]">{<Outlet />}</div>
          <Footer />
        </div>
      </div>
    </div>
  ) : <Navigate to={"/login"} />
};

export default AppLayout;
