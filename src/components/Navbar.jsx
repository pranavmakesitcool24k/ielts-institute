import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <img
            src="./src/favicon.ico"
            alt="IELTS Institute"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
            IELTS Institute
          </h1>
        </div>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
