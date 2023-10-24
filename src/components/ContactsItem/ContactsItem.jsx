import PropTypes from 'prop-types';
import css from './ContactsItem.module.css'
export default function ContactsItem({ contacts, deleteContacts }) {
  return (
    <li className={css.list}>
      {contacts.name}: {contacts.number}{' '}
      <button className={css.button} onClick={() => deleteContacts(contacts.name)}>Delete</button>
    </li>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};