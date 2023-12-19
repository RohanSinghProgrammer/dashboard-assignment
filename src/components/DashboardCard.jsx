import React from "react";

const DashboardCard = ({ title, number, color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="border-2 border-black box-shadow rounded-xl px-6 pt-2 pb-6 flex flex-col items-center justify-between w-40 h-44"
    >
      <h3 className="font-semibold text-center">{title}</h3>
      <h2 className="text-5xl text-blue-900">{number}</h2>
    </div>
  );
};

export default DashboardCard;
