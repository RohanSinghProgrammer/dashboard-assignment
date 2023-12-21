import React from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const Rating = () => {
  return (
    <div className="flex text-3xl text-white">
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
      <IoMdStar />
      <IoMdStarHalf />
      {/* <IoMdStarOutline /> */}
    </div>
  );
};

export default Rating;
