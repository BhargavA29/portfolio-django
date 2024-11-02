"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#portfolio" },
  { title: "Experience", path: "#experience" },
  { title: "Contact", path: "#contact" }, // Updated to "Contact Me" to match your preference
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="text-white/70 pt-6">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link href={link.path}>
                <p className="text-lg font-bold text-white/70 cursor-pointer">
                  {link.title}
                </p>
              </Link>
              {/* Hover Effect Lines */}
              <div className="absolute left-0 bottom-0 w-2/3 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
              <div className="absolute left-0 bottom-[-4px] w-1/3 h-1 bg-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-5 border rounded border-white/70 p-2 z-50 text-white/70"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full h-screen z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;