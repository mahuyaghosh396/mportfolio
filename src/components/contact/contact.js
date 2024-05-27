import React, { useState} from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data:', formData); // Log form data for debugging

    emailjs.sendForm("service_6mjcj9s","template_uz4xxtj", e.target, "E4jPESM6c8qFtKE0J")
      .then((result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact'>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
