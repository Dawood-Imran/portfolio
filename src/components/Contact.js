import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    {toast && (
      <div className={`terminal-toast ${toast}`}>
        <div className="toast-topbar">
          <span className="terminal-dot red" />
          <span className="terminal-dot yellow" />
          <span className="terminal-dot tgreen" />
          <span className="toast-filename">system.log</span>
        </div>
        <div className="toast-body">
          <span className="toast-prompt">&gt;</span>
          {toast === 'success'
            ? <span className="toast-msg success">[ ✓ ] message_sent.log — OK</span>
            : <span className="toast-msg error">[ ✗ ] send_failed.log — ERR</span>
          }
        </div>
      </div>
    )}
    <section className="contact">
      <div className="contact-container">
        <h2 className="heading">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <h1 className="email-text">
              Send me an email
            </h1>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="styled-button" >Send Email</button>
            </form>
          </div>
          <div className="social-links">
            <div className="social-item">
              <FaGithub size={24} color='white' />
              <a href="https://github.com/Dawood-Imran" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="social-item">
              <FaLinkedin size={24} color='#0077B5' />
              <a href="https://linkedin.com/in/muhammad-dawood-imran" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;