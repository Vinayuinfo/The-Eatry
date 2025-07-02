"use client";
import React, { useState } from "react";
import Logo from "../SvgImages/Logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center py-3 px-4  md:py-4 md:px-6 bg-green-700 text-white">
        <div className="flex items-center space-x-4 h-10 w-10 md:h-auto md:w-auto">
          <Logo  height={50} width={50} />
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-yellow-400 text-green-700 px-4 py-2 rounded hover:bg-yellow-500">
            Order Now
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div>
        <div className="fixed inset-0 bg-green-800 z-50 flex flex-col justify-center items-center space-y-6">
          <button onClick={()=>{setIsOpen(false)}} className="absolute top-8 right-8"><X className="text-white" /></button>
          <a onClick={() => setIsOpen(false)} href="/" className="text-xl text-white">
            Home
          </a>
          <a onClick={() => setIsOpen(false)} href="/menu" className="text-xl text-white">
            Menu
          </a>
          <a onClick={() => setIsOpen(false)} href="#" className="text-xl text-white">
            About
          </a>
          <a onClick={() => setIsOpen(false)} href="#" className="text-xl text-white">
            Contact
          </a>
        </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
