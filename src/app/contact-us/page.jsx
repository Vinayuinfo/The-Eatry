import React from "react";
import ContactUs from "../Component/ContactUs";
import Vnavbar from "../Component/Vnavbar";
import Navbar from "../Component/Navbar";

const page = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen font-mono">
        <Navbar />
        <div className="flex flex-1 md:pl-64">
          <div className="hidden md:block">
            <Vnavbar />
          </div>

          <div className="flex-1 p-6">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
