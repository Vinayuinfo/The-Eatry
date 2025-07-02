"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Vnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="hidden md:flex flex-col bg-green-800  text-white border-r-2 shadow-lg justify-between w-60"> */}
       <div className="hidden md:flex flex-col bg-green-800 text-white w-60 border-r-2 shadow-lg min-h-[calc(100vh-80px)] fixed justify-between top-20 left-0">
        <div className="flex flex-col">
          <a
            href="/"
            className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
          >
            Menu
          </a>
          <a
            href="/about-us"
            className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
          >
            About
          </a>
          <a
            href="/contact-us"
            className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
          >
            Contact
          </a>
        </div>
        <div className="text-center p-4 text-sm">
          ©{new Date().getFullYear()} The Eatry
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-green-800 text-white md:hidden">
        <span className="font-bold text-xl">The Eatry</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-green-800 z-50 flex flex-col justify-between md:hidden">
          <div className="flex flex-col">
            <a
              onClick={() => setIsOpen(false)}
              href="/"
              className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="/menu"
              className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
            >
              Menu
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#"
              className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#"
              className="text-lg text-center p-4 border-b border-green-700 hover:bg-green-700 transition rounded"
            >
              Contact
            </a>
          </div>
          <div className="text-center p-4 text-sm">
            ©{new Date().getFullYear()} The Eatry
          </div>
        </div>
      )}
    </>
  );
};

export default Vnavbar;
