import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="grid place-items-center space-y-4">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h3 className="text-3xl font-semibold">oops! Page not found</h3>
        <p className="text-gray-700">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <div className="w-52 flex justify-between pt-6">
          <Link to={"/"}  className="px-4 py-2 rounded-md text-white bg-green-500 font-semibold">Home</Link>
          <Link to="#" className="px-4 py-2 rounded-md text-white bg-red-500 font-semibold">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
