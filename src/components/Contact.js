// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send('service_5e9n3es', 'template_xgyut2a', formData, 'WzxtCR830RZk9AJv7')
      .then((response) => {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setErrorMessage('Failed to send message.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact py-12 px-4 md:px-12 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-2 mt-2 bg-gray-700 border border-gray-600 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 mt-4 text-lg font-semibold ${isSubmitting ? 'bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {successMessage && <p className="text-green-400 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-400 mt-4">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
