import React from "react";
import logo from "../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
  const navItems = ["Home", "Movies & Shows", "Support", "Subscription"];

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
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  index === 0
                    ? "p-2 bg-neutral-900/50 border-gray-500 rounded-md"
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* icons */}
        <div className="flex items-center gap-4 text-[16px] text-white">
          <div>
            <CiSearch className="cursor-pointer" />
          </div>
          <div>
            <IoMdNotificationsOutline className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
