import React, { useState } from 'react';
import './ContactForm.css'; // Ensure this matches the actual file name

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Here you would typically send the form data to your server
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Your Message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        required 
      />
      <button type="submit" className="submitBtn">Submit</button>
    </form>
  );
};

export default ContactForm;