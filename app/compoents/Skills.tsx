import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaPython,
  FaGit,
  FaFigma,
  FaJsSquare,
} from "react-icons/fa";
import "../styling/skills.css"; // Import your custom CSS

const skillsIcons = [
  { icon: <FaHtml5 size={140} />, name: "HTML" },
  { icon: <FaCss3 size={140} />, name: "CSS" },
  { icon: <FaReact size={140} />, name: "REACT" },
  { icon: <FaJsSquare size={140} />, name: "JAVASCRIPT" },
  { icon: <FaNode size={140} />, name: "NODE" },
  { icon: <FaPython size={140} />, name: "PYTHON" },
  { icon: <FaFigma size={140} />, name: "FIGMA" },
  { icon: <FaGit size={140} />, name: "GIT" },
];

export const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h2 className="skills-heading">What I Do</h2>
        <div className="skills-grid">
          {skillsIcons.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
