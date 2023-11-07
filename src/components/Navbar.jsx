import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logIn, logOut } = UserAuth();
  const navigate = useNavigate();
  //console.log(user.email);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between absolute p-4 z-[100] w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer">Reels DB</h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className=" text-white rounded px-5 py-2">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white rounded px-5 py-2 ml-4"
          >
            Log out
          </button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
