// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-4 py-4 md:px-8 md:py-6 z-50">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">Gauri Agrawal</div>
      </div>

      <div className="hidden md:flex space-x-6">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Home
        </Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Contact
        </Link>
        <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:underline">
          Resume
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 w-3/4 bg-gray-800 text-white h-full md:hidden transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
      >
        <div className="flex flex-col items-center py-6">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="py-2 text-xl cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="py-2 text-xl cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="py-2 text-xl cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 text-xl cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            className="py-2 text-xl cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
