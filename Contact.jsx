import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact container section">
      <div className="secTitle">
        <h3 className="title">Contact Us</h3>
      </div>
      <div className="contactContent">
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;