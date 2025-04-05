import React from "react";
import logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
  return (
    <nav className="w-full">
      <div className="bg-neutral-900 flex justify-between items-center py-4 px-20">
        {/* logo */}
        <div>
          <img src={logo} alt="nav-logo" className="w-[120px] h-[40px]" />
        </div>
        {/* nav-link */}
        <div className="w-[500px] bg-neutral-700 text-white text-[12px] rounded shadow-md shadow-white border-gray-500">
          <ul className="flex justify-between items-center p-2">
            <li className="p-2 bg-neutral-900/50 border-gray-500 rounded-md">
              Home
            </li>
            <li>Movies & Shows</li>
            <li>Support</li>
            <li>Subscription</li>
          </ul>
        </div>
        {/* icons */}
        <div className="flex items-center gap-4 text-[16px] text-white">
          <div>
            <CiSearch />
          </div>
          <div>
            <IoMdNotificationsOutline />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
