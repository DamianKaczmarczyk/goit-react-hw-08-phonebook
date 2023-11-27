import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/reducer/contactsSlice';
import css from './ContactsItem.module.css'
export default function ContactsItem({ contacts }) {
  const dispatch = useDispatch();

  return (
    <li className={css.list}>
      {contacts.name}: {contacts.number}{' '}
      <button className={css.button} onClick={() =>dispatch(deleteContact(contacts.name))}>Delete</button>
    </li>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};