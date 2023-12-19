import React from "react";
import DashboardCard from "../components/DashboardCard";
import { BsBarChartLine } from "react-icons/bs";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaUsersGear } from "react-icons/fa6";
import { BiSolidUserVoice } from "react-icons/bi";
import Rating from "../components/Rating";
import { dashboardCardInfoArr } from "../data/DummyData";

const Home = () => {
  return (
    <div className="flex flex-col py-4 px-12 h-full">
      <h2 className="text-2xl font-semibold text-gray-900 h-[10%]">
        Dashboard
      </h2>
      {/* --------------------------- TOP CARDS --------------------------- */}
      <div className="flex items-center justify-between my-4 h-[30%]">
        {dashboardCardInfoArr.map((item, index) => (
          <div key={index}>
            <DashboardCard {...item} />
          </div>
        ))}
      </div>
      {/* --------------------------- BOTTOM ANALYTICS --------------------------- */}
      <div className="pb-4 grid grid-cols-2 grid-rows-3 gap-8 mt-8 h-[60%]">
        <div className="row-span-3 bg-ui-turquoise h-full grid place-items-center">
          <BsBarChartLine className="text-9xl text-blue-900" />
        </div>
        <div className="h-full bg-ui-turquoise row-span-2 flex justify-evenly items-center">
          <div className="grid place-items-center">
            <BiSolidUserVoice className="text-6xl" />
            <div className="text-xl mt-2 grid place-items-center">
              <h3 className="text-blue-900 font-semibold">3</h3>
              <h3>Team Support</h3>
            </div>
          </div>
          <div className="grid place-items-center">
            <FaUsersGear className="text-6xl" />
            <div className="text-xl mt-2 grid place-items-center">
              <h3 className="text-blue-900 font-semibold">4</h3>
              <h3>Team Operation</h3>
            </div>
          </div>
        </div>
        <div className="h-full bg-ui-turquoise rounded-lg grid place-items-center py-1">
          <h2 className="font-semibold tracking-wide text-lg">
            Customer Feedback
          </h2>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default Home;
