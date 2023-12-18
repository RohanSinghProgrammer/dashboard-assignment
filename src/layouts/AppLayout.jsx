import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SIdebar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          {<Outlet />}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
