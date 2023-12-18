import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="bg-ui-turquoise h-screen grid place-items-center">
      <div className="py-12 px-24 bg-ui-light-turquoise">
        {<Outlet />}
      </div>
    </div>
  );
};

export default LoginLayout;
