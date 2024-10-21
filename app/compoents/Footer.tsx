import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import '../styling/footer.css'  // Assuming the CSS is in Footer.css

export const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-heading">Syeda Munama Hassan</h1>
      <div className="footer-links">
        <a href="#"><FaLinkedin size={24}/></a>
        <a href="#"><FaGithub size={24}/></a>
        <a href="#"><FaInstagram size={24}/></a>
      </div>
    </div>
  )
}
