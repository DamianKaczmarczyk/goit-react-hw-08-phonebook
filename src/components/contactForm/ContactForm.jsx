import React, { Component } from 'react';
import css from './ContactForm.module.css'

const STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...STATE };

  hendlerChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendlerSubmit = event => {
    event.preventDefault();
    this.props.addNewContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form}onSubmit={this.hendlerSubmit}>
        <label>
          Name
          <input className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.hendlerChange}
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
            value={number}
            onChange={this.hendlerChange}
          />
        </label>
        <button className={css.button}type="submit">Add contact</button>
      </form>
    );
  }
}