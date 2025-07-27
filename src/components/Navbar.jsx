import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-950 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">CodeByTosin<span className="text-4xl text-yellow-400">.</span></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="text-gray-300 hover:text-yellow-400">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-red-950 px-4 pb-4 space-y-4 font-medium">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="block text-gray-300 hover:text-yellow-400"
                onClick={() => setOpen(false)}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
