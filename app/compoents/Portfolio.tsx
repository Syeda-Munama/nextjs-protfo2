"use client";
import React from 'react';
import project from "../assets/project.png";
import project1 from "../assets/project1.png";
import { motion } from "framer-motion";
import Image from "next/image";
import '../styling/portfolio.css'; // Import your custom CSS

export const Portfolio = () => {
  const projects = [
    {
      title: "Inventory Management System",
      desc: "The system allows users to manage their inventory by adding, updating, and deleting items. It has a cart page and an admin page.",
      devstack: "React, Node.js, Express, MongoDB",
      link: "#",
      git: "https://github.com/Syeda-Munama/Accessories-Frontend",
      src: project1
    },
    {
      title: "Resume Builder Application",
      desc: "A web application that allows users to create professional resumes by filling in personal information, education, experience, and skills.",
      devstack: "HTML, CSS, JavaScript",
      link: "https://resume-builder-indol-chi.vercel.app/",
      git: "https://github.com/Syeda-Munama/resume-builder",
      src: project
    }
  ];

  return (
    <div className="portfolio-container" id="portfolio">
      <h1 className="portfolio-heading">Selected <span>Work</span></h1>
      <div className="portfolio-content">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`portfolio-item ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="portfolio-item-content">
              <h2 className="portfolio-item-number">{`0${index + 1}`}</h2>
              <h2 className="portfolio-item-title">{project.title}</h2>
              <p className="portfolio-item-desc">{project.desc}</p>
              <p className="portfolio-item-devstack">{project.devstack}</p>
              <div className="portfolio-divider"></div>
              <div className="portfolio-links">
                <a href={project.link}>Link</a>
                <a href={project.git}>Git</a>
              </div>
            </div>

            <div className="portfolio-image-container">
              <Image 
                src={project.src} 
                alt={project.title} 
                className="portfolio-image"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
