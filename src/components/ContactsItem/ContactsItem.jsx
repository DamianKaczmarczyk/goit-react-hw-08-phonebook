import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/operations/operations';
import css from './ContactsItem.module.css'
export default function ContactsItem({ contacts }) {
  const dispatch = useDispatch();

  return (
    <li className={css.list}>
      {contacts.name}: {contacts.phone}
      <button className={css.button} onClick={() =>dispatch(deleteContact(contacts.id))}>Delete</button>
    </li>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};