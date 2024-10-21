import React from 'react';
import Image from "next/image";
import phone from "../assets/phone.webp";
import mail from "../assets/mail.webp";
import "../styling/contact.css"; // Import your custom CSS

export const Contact = () => {
  return (
    <div className='contact-container' id="contact">
      {/* Contact Info */}
      <div className='contact-info'>
        <ul>
          <li>
            <Image src={phone} alt='phone' />
            <p>+92 312 1299499084</p>
          </li>
          <li>
            <Image src={mail} alt='mail' />
            <p>syedamunamahassan@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className='contact-form'>
        <h2>Let's Connect</h2>
        <p>Send me a message, and let's schedule a call!</p>

        <form >
          <div className='form-grid'>
            <input type='text' name='name' placeholder='First Name' />
            <input type='text' name='name' placeholder='Last Name' />
          </div>
          <input type='email' name='email' placeholder='Email' />
          <input type='phone' name='phone' placeholder='Phone' />
          <textarea placeholder='Your Message' rows={5} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
