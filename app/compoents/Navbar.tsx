"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "../styling/nav.css"; // Import the custom CSS file

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNave = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVarients = {
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
    <div className="navbar">
      {/* Desktop Navbar */}
      <div className="navbar-desktop">
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-link">
              <Link href={link.path}>
                <p>{link.title}</p>
              </Link>
            </li>
          ))}

          <li>
            <a href="#contact" className="nav-contact">
              Contact Me
              <div className="underline underline-1"></div>
              <div className="underline underline-2"></div>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div onClick={toggleNave} className="menu-toggle">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVarients}
        className="mobile-menu"
      >
        <ul>
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
