import PropTypes from 'prop-types';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="contact-card bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      {contact.name}
    </h2>
    <p className="contact-info">Email: {contact.email}</p>
    {contact.phone && <p className="contact-info">Phone: {contact.phone}</p>}
    {contact.address && <p className="contact-info">Address: {contact.address}</p>}
    <button
      onClick={onDelete}
      className="bg-danger hover:bg-danger-700 focus:ring-4 focus:outline-none focus:ring-danger-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Delete
    </button>
  </div>
</div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
