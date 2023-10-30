import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
import FilterName from './FilterName/FilterName';
import ContactList from './ContactList/ContactList';

const STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = {
    ...STATE,
  };

  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : this.setState({
          contacts: [...contacts, { name, number, id: nanoid() }],
        });
        localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  hendlerChangeFilter = event => {
    return this.setState({
      filter: event.target.value,
    });
  };

  getFilterName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  deleteContacts = nameToDelete => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(user => user.name !== nameToDelete),
    }));
  };

  componentDidMount() {
    const savedSettings = localStorage.getItem('contacts');
    const parsedSettings = JSON.parse(savedSettings);
    console.log(parsedSettings);
    if (parsedSettings !==null) this.setState({ contacts: parsedSettings});
  }

componentDidUpdate() {
  const { contacts } = this.state;
  localStorage.setItem('contacts', JSON.stringify(contacts));
}
  render() {
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
          <ContactForm addNewContact={this.addNewContact} />
          <h2 style={{
            display:'flex',
            justifyContent:'center',
          }}>Contacts</h2>
          <FilterName hendlerChangeFilter={this.hendlerChangeFilter} />
          <ContactList
            getFilterName={this.getFilterName}
            deleteContacts={this.deleteContacts}
          />
        </div>
      </div>
    );
  }
}

export default App;