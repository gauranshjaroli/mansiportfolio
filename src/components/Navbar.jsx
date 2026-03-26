import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-500">
          Mansi
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#portfolio" className="hover:text-yellow-500">Work</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;