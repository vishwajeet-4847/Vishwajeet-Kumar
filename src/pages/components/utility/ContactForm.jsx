import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: 'onChange' }); // Enable real-time validation
  
  const [thankYouMessage, setThankYouMessage] = useState('');

  const onSubmit = (data) => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL, data)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        setThankYouMessage(`Thank you ${data.name}! for reaching out!`);
        reset();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="floating-contact">
      {thankYouMessage && <div style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{thankYouMessage}</div>}
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

        <input
          type="submit"
          value="Submit"
          disabled={!isValid || isSubmitting} // Use isValid and isSubmitting here
        />
      </form>
    </div>
  );
};

export default ContactForm;
