import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [thankYouMessage, setThankYouMessage] = useState('');

  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/submit-form', data)
      .then((response) => {
        // Handle successful form submission
        console.log('Form submitted successfully:', response.data);
        // Display thank you message with the name
        setThankYouMessage(`Thank you ${data.name} for reaching me out!`);
        // Clear form after successful submission
        reset();
      })
      .catch((error) => {
        // Handle form submission error
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="floating-contact">
      {thankYouMessage && <div style={{color:"green", fontWeight:"bold",textAlign:"center"}}>{thankYouMessage}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="tel"
          placeholder="Phone"
          {...register('phone', {
            required: 'Phone is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Please enter a valid phone number (10 digits)',
            },
          })}
        />
        {errors.phone && <p>{errors.phone.message}</p>}

        <textarea
          placeholder="Message"
          {...register('message', { required: 'Message is required' })}
          style={{ maxHeight: '200px', overflow: 'auto' }}
        />
        {errors.message && <p>{errors.message.message}</p>}

        <input type="submit" value="Submit" />
      </form>
      
    </div>
  );
};

export default ContactForm;