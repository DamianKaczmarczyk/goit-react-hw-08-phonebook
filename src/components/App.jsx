import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
import FilterName from './FilterName/FilterName';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { startContact } from 'redux/reducer/contactsSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const filter = useSelector(state => state.filter);

  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const getFilterName = () => {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(
    () => {
      const savedSettings = localStorage.getItem('contacts');
      const parsedSettings = JSON.parse(savedSettings);

      if (parsedSettings !== null) dispatch(startContact(parsedSettings));
    },
    []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20',
          color: '#010101',
        }}
      >
        <h1 style={{
          display:'flex',
          justifyContent: 'center',
        }}>Phonebook</h1>
        <div 
        >
          <ContactForm />
          <h2 style={{
            display:'flex',
            justifyContent:'center',
          }}>Contacts</h2>
          <FilterName />
          <ContactList
            getFilterName={getFilterName}
          />
        </div>
      </div>
    );
  };

export default App;