import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between absolute p-4 z-[100] w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer">Reels DB</h1>
      </Link>
      <div>
        <Link to="/login">
          <button className=" text-white rounded px-5 py-2">Sign In</button>
        </Link>

        <Link to="/signup">
          <button className="bg-red-600 text-white rounded px-5 py-2 ml-4">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
