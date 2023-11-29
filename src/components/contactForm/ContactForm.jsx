import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/operations/operations';
import css from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { contacts } = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handlerSubmit = event => {
    event.preventDefault();
    contacts.find(contact => contact.name === name)
      ? alert(`${contacts.name} is already in contacts.`)
      : dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

    return (
      <form className={css.form}onSubmit={handlerSubmit}>
        <label>
          Name
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handlerChange}
          />
        </label>
        <label>
          Number
          <input className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handlerChange}
          />
        </label>
        <button className={css.button}type="submit">Add contact</button>
      </form>
    );
  }