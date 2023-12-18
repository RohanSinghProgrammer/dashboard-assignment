import React, { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);
  const activeClass = "px-3 py-0.5 bg-black text-white";
  const deActiveClass = "px-3 py-0.5";
  return (
    <div className="rounded-md overflow-hidden border-2 border-black text-xs shadow-2xl">
      <button
        onClick={() => setToggle(true)}
        className={toggle ? activeClass : deActiveClass}
      >
        BM
      </button>
      <button
        onClick={() => setToggle(false)}
        className={toggle ? deActiveClass : activeClass}
      >
        BI
      </button>
    </div>
  );
};

export default ToggleButton;
