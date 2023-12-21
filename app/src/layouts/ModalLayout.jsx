import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const ModalLayout = ({ children, open = true, setOpen }) => {
  return open ? (
    <div className="h-screen w-screen bg-[rgba(0,0,0,0.75)] absolute top-0 left-0 grid place-items-center">
      <div className="bg-white rounded-md p-8 relative">
        <button onClick={()=> setOpen(false)} className="absolute right-2 top-2">
          <IoClose className="text-xl" />
        </button>
        {children}
      </div>
    </div>
  ) : null;
};

export default ModalLayout;
