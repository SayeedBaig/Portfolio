
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace
        "YOUR_TEMPLATE_ID", // replace
        form.current,
        "YOUR_PUBLIC_KEY" // replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert(" Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Interested in collaborating or want a demo? Reach me at{" "}
        <a href="mailto:baigsayeed06@gmail.com">baigsayeed06@gmail.com</a> or connect on LinkedIn.
      </p>

      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form-box">
          <h3>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Your Name *</label>
            <input type="text" name="user_name" placeholder="John Doe" required />

            <label>Email Address *</label>
            <input type="email" name="user_email" placeholder="john@example.com" required />

            <label>Subject *</label>
            <input type="text" name="subject" placeholder="Project Collaboration Opportunity" required />

            <label>Message *</label>
            <textarea name="message" placeholder="Hi Sayeed, I'd love to discuss..." rows="4" required></textarea>

            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>

        {/* Right Side */}
        <div className="contact-info">
          <div className="info-box">
            <h3>Contact Information</h3>
            <p><FaEnvelope /> baigsayeed06@gmail.com</p>
            <p><FaPhone /> +91 9945452342</p>
            <p><FaMapMarkerAlt /> Bangalore, Karnataka, India</p>
          </div>

          <div className="info-box">
            <h3>Connect With Me</h3>
            <a href="https://github.com/SayeedBaig" target="_blank" rel="noreferrer"><FaGithub /> @sayeedbaig</a>
            <a href="https://www.linkedin.com/in/sayeed-baig-3764a5297/" target="_blank" rel="noreferrer"><FaLinkedin /> /in/sayeedbaig</a>
            <a href="https://twitter.com/sayeedbaig" target="_blank" rel="noreferrer"><FaTwitter /> @sayeedbaig</a>
            <p><FaDiscord /> sayeedbaig#1234</p>
          </div>

          <div className="info-box">
            <h3>Let's Build Something Amazing!</h3>
            <p>Whether you have a project in mind, want to collaborate, or just want to connect — I'd love to hear from you.</p>
            <div className="buttons">
              <a href="mailto:baigsayeed06@gmail.com" className="btn-primary">Quick Email</a>
              <a href="https://www.linkedin.com/in/sayeed-baig-3764a5297/" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

