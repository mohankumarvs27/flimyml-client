import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

import PoppupComProfile from "../Components/PoppupComProfile";

function HeaderCom() {
  return (
    <>
      <header className="px-3.5 bg-gray-800 py-1 sticky w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white space-x-2">
            {/* <HiMenuAlt1 className="h-6 w-6 text-gray-400" /> */}
            <img
              src="https://res.cloudinary.com/dqot1ggrh/image/upload/v1680239160/logo_xcoqwa.svg"
              alt="logo"
              className="w-10"
            />
            <p>Movie Recommendation System</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-1 hidden md:inline relative">
              <input
                type="text"
                placeholder="Search"
                className="placeholder-gray-600 w-96 h-full py-3 px-2 rounded-md focus:outline-none"
              />
              <FaSearch className="absolute bottom-1.5 h-7 w-7 hover:bg-gray-300 right-3 border-transparent hover:text-white p-1 border m-1.5 rounded-full" />
            </div>
            {/* <FaSearch className="hover:bg-red-100 rounded border m-2 text-black" /> */}
          </div>
          <div className="flex items-center">
            <IoNotifications className="h-6 w-6" />
            <PoppupComProfile />
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderCom;
