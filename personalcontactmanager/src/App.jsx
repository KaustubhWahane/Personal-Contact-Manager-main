import  { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, { ...newContact, id: Date.now() }];
    setContacts(updatedContacts);
  
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="marquee bg-blue-500 text-white py-2 px-4 rounded-md overflow-hidden">
        <div className="animate-marquee text-lg">Assignment Done by Ziprya 😃</div>
      </div>

      <h1 className="text-3xl font-bold mb-6">Personal Contact Manager</h1>
      {/* This be the Contact Form */}
      <ContactForm addContact={addContact} />

      {/* Showing Contacts */}
      {contacts.length > 0 ? (
  <div>
    {contacts.map((contact, index) => (
      <Contact
        key={index}
        contact={contact}
        deleteContact={() => deleteContact(contact.id)}
      />
    ))}
  </div>
) : (
  <p>No contacts available.</p>
)}


    </div>
  );
};

export default App;
