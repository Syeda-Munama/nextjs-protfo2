import React from "react";
import Image from "next/image";
import pc from "../assets/pc.png";
import book from "../assets/book.webp";
import card from "../assets/ccard.webp";
import money from "../assets/money.webp";
import "../styling/about.css";
export const About = () => {
  return (
    <div className="container" id="about">
      <h1 className="section-heading">
        About <span className="highlight">Me</span>
      </h1>
      <div className="grid-layout">
        <div className="card md:col-span-5">
          <div className="gradient-overlay"></div>
          <div className="card-content">
            <Image src={book} alt="book" className="card-image" />
            <div className="card-text">
              <h1 className="card-heading">Education</h1>
              <p className="card-description">
                I am an undergraduate computer systems engineer at DUET.
                Currently focusing on technologies like React, Next.js,
                Typescript and Python.
              </p>
            </div>
          </div>
        </div>

        <div className="card md:col-span-3">
          <div className="gradient-overlay"></div>
          <div className="card-content">
            <Image src={pc} alt="pc" className="card-image" />
            <div className="card-text">
              <h1 className="card-heading">Problem Solving</h1>
              <p className="card-description">
                I approach challenges with a logical and systematic approach.
              </p>
            </div>
          </div>
        </div>

        <div className="card md:col-span-3">
          <div className="gradient-overlay"></div>
          <div className="card-content">
            <Image src={card} alt="card" className="card-image" />
            <div className="card-text">
              <h1 className="card-heading">Experience</h1>
              <p className="card-description">
                Internship at Al Rahim Textile Industry and Senior Student at
                GIAIC. I have a diverse portfolio of projects.
              </p>
            </div>
          </div>
        </div>

        <div className="card md:col-span-5">
          <div className="gradient-overlay"></div>
          <div className="card-content">
            <Image src={money} alt="money" className="card-image" />
            <div className="card-text">
              <h1 className="card-heading">Technical Skills</h1>
              <p className="card-description">
                I specialize in building web applications using React, Next.js,
                TypeScript, and Tailwind CSS. My expertise lies in creating
                highly responsive, and user-friendly interfaces that provide
                seamless experiences across devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
