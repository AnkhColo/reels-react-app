import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between absolute p-4 z-[100] w-full">
      <h1 className="text-red-600 text-4xl cursor-pointer">Reels DB</h1>
      <div>
        <button className=" text-white rounded px-5 py-2">Sign In</button>
        <button className="bg-red-600 text-white rounded px-5 py-2 ml-4">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
