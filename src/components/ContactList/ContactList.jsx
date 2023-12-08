import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import { UnorderedList } from '@chakra-ui/react';

export default function ContactList({ getFilterName }) {
  return (
    <UnorderedList>
      {getFilterName().map(contact => (
        <ContactsItem key={contact.id} contacts={contact} />
      ))}
    </UnorderedList>
  );
}

ContactList.propTypes = {
  getFilterName: PropTypes.func.isRequired,
};