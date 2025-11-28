import React, { useState } from 'react';
import './Contact.css';

const FORM_ENDPOINT = process.env.REACT_APP_CONTACT_FORM_ENDPOINT || '';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please complete all fields.' });
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus({ state: 'error', message: 'Contact endpoint not configured. Set REACT_APP_CONTACT_FORM_ENDPOINT.' });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending message…' });

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message })
    })
      .then(async (res) => {
        if (res.ok) {
          setStatus({ state: 'success', message: 'Message sent — thank you!' });
          setFormData({ name: '', email: '', message: '' });
        } else {
          const text = await res.text().catch(() => 'Submit failed');
          throw new Error(text || 'Submit failed');
        }
      })
      .catch((err) => {
        console.error('Contact form error:', err);
        setStatus({ state: 'error', message: 'There was an error sending your message. Please try again later.' });
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential roles, or just want to say hello, feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>mmorales99c@gmail.com</span>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+506 88661648</span>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>San José, Costa Rica</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {!FORM_ENDPOINT && (
              <div className="form-status warning">Contact endpoint not configured. Set `REACT_APP_CONTACT_FORM_ENDPOINT` to your Formspree URL in `.env.local`.</div>
            )}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={status.state === 'sending'} aria-busy={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status.message && (
              <div className={`form-status ${status.state}`}>{status.message}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;