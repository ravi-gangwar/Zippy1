import React from 'react';
import '../Styles/ContactPage.css';

function Contact() {

  return (
    <div className='contactPage'>
      <header>
        <h1>Contact Us</h1>
      </header>
      <main className='mainForm'>
        <section className="contact-form">
          <h2>Get in Touch</h2>
          <form >
            <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
