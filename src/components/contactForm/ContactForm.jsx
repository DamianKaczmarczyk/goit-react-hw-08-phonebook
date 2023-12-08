import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/reducers/contacts/operations';
import { Input, Button, FormLabel } from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handlerSubmit = event => {
    event.preventDefault();
    contacts.find(contact => contact.name === name)
      ? alert(`${contacts.name} is already in contacts.`)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <FormLabel display="flex" gap={2} alignItems="center">
        <Input
          width="auto"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder={'Name'}
          value={name}
          onChange={handlerChange}
          my={2}
        />
      </FormLabel>
      <FormLabel display="flex" gap={2} alignItems="center">
        <Input
          width="auto"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder={'Number'}
          value={number}
          onChange={handlerChange}
          my={2}
        />
      </FormLabel>
      <Button type="submit" colorScheme="blue">
        Add contact
      </Button>
    </form>
  );
}