"use client";
import Image from "next/image";
import cursor from "../assets/icon2.webp";
import rock from "../assets/iconnn2.png";
import { motion } from "framer-motion";
import profilepicture from "../assets/profilepicture.png";
import React from 'react';
import '../styling/hero.css'; // Import your custom CSS file

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-background-circle"></div>

      <div className="relative">
        <div className="hero-text">
          <h1 className="hero-text-primary">Hello, I am</h1>
          <h1 className="hero-text-secondary">Syeda Munama</h1>
        </div>

        {/* Cursor and Rock images */}
        <motion.div className="hero-cursor" drag>
          <Image src={cursor} alt="cursor" width="140" height="140" draggable="false" />
        </motion.div>

        <motion.div className="hero-rock" drag>
          <Image src={rock} alt="rock" width="170" height="170" draggable="false" />
        </motion.div>

        <p className="hero-description">
          I am an undergraduate computer systems engineer with dedicated expertise in web development.
        </p>

        {/* Profile picture */}
        <div className="hero-profile-picture-container">
          <Image 
            src={profilepicture} 
            alt="profile picture" 
            className="hero-profile-picture"
          />
        </div>
      </div>
    </div>
  );
};
