import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [sentMessage, setSentMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a537cu6', // Replace with your EmailJS service ID
        'template_ykahacb', // Replace with your EmailJS template ID
        e.target,
        'hQUs42nt4uSkQXR4Y' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentMessage(true);
          e.target.reset();
          setTimeout(() => setSentMessage(false), 5000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <motion.button
            className="submit-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send
          </motion.button>
        </form>
        {sentMessage && <div className="sent-message">Message sent successfully!</div>}
      </motion.div>
    </div>
  );
};

export default Contact;
