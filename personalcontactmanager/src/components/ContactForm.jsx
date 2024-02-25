import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact(formData);

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
    <div className="bg-blue-500 p-4 rounded-md mb-6">
      <h2 className="text-white text-2xl font-bold mb-2">Login Form</h2>
      <p className="text-white">Please enter yer details below:</p>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="input"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Phone:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Optional"
        className="input"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Address:</label>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Optional"
        className="input"
      />
    </div>
    <button
      type="submit"
      className="bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Add Contact
    </button>
  </form>
  
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
