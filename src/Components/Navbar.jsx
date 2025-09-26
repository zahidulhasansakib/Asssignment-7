import { MdOutlineMenu } from "react-icons/md";


import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className=" bg-white-100 shadow-md border-b-[0.5px] border-gray-300">

        
      <nav className="px-8 py-4 flex justify-between items-center ">
        <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-800">
            FAQ
          </a>
          <a href="#" className="text-gray-800">
            Changelog
          </a>

          <a href="#" className="text-gray-800">
            Blog
          </a>
          <a href="#" className="text-gray-800">
            Download
          </a>
          <a href="#" className="text-gray-800">
            Contact
          </a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Assignment
          </button>
        </div>
        <div className="block md:hidden">
          <MdOutlineMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
