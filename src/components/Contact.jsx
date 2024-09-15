import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        const response = await fetch('/.netlify/functions/contact', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
          });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage('Error sending message');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-4xl text-red-400 font-bold text-center mb-8">Contact Me</h2>
      <div className="bg-gray-800 mb-10 shadow-lg rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className="w-full border text-white bg-gray-800  p-3 border-gray-600 rounded-md focus:outline-none "
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full border text-white bg-gray-800  border-gray-600 p-3 rounded-md focus:outline-none "
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full border text-white bg-gray-800  border-gray-600 p-3 rounded-md focus:outline-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 border border-gray-600 text-white py-3 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
