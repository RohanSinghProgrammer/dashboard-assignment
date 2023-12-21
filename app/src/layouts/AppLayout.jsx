import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => {
  return (
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
  );
};

export default AppLayout;
