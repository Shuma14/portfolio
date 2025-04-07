import React, { useState } from 'react';
import '../CSS/Contact.css'
import phoneIcon from '../Assets/phone.png';
import fbIcon from '../Assets/facebook.png';
import emailIcon from '../Assets/email.png';
import linkedinIcon from '../Assets/linkedin.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <div className='contact'>
      <h1>Contact Me</h1>
    <div className="contact-container">
      
     <div className="contactform">
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
      </div>
      <div className="contact-details">
      <ul>
      <li>
  <img src={phoneIcon} alt="Phone Icon" style={{ width: '30px', marginRight: '10px' }} />
  <a href="tel:+639507297832">+63950-729-7832</a>
</li>
      <li>
      <img src={fbIcon} alt="Facebok Icon" style={{ width: '30px', marginRight: '10px' }} />
        <a href="https://www.facebook.com/panoramic14" target="_blank">panoramic14</a>
      </li>
      <li>
      <img src={emailIcon} alt="Email Icon" style={{ width: '30px', marginRight: '10px' }} />
        <a href="mailto:your.marcchristian.roldan@gmail.com">marcchristian.roldan@gmail.com</a>
      </li>
      <li>
      <img src={linkedinIcon} alt="Linkedin Icon" style={{ width: '30px', marginRight: '10px' }} />
        <a href="https://www.linkedin.com/in/marc-roldan-590966320/" target="_blank">LinkedIn</a>
      </li>
    </ul>
    
     </div>
     </div>
     </div>
  );
};

export default Contact;