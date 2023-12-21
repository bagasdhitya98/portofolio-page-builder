import React from "react";

const Navbar = () => {
  return (
    <div className="bg-cyan-500 p-4 rounded-b-3xl w-screen">
      <nav className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">iExperience</div>
        <div className="flex space-x-4 h-10 ">
          <a
            href="#about-us"
            className="text-white transition duration-300 w-32 hover:bg-cyan-600 hover:text-white hover:font-bold flex items-center justify-center rounded-md"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-white transition duration-300 w-32 hover:bg-cyan-600 hover:text-white hover:font-bold flex items-center justify-center rounded-md"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
