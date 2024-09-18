import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!name || !email || !phone || !message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      setErrorMessage('Please enter a valid phone number (10 digits).');
      return;
    }

    // If validation passes, clear the error message
    setErrorMessage('');

    // Perform form submission logic here
    // ...
  };

  const validateEmail = (email) => {
    // Email validation logic
    // ...
  };

  const validatePhone = (phone) => {
    // Phone number validation logic
    // ...
  };

  return (
    <div className="floating-contact">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ maxHeight: '200px', overflow: 'auto' }}
          required
        />
        {errorMessage && <p>{errorMessage}</p>}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;