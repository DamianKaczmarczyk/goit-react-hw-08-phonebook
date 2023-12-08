import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/reducers/contacts/operations';
import { ListItem, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export default function ContactsItem({ contacts }) {
  const dispatch = useDispatch();

  return (
    <ListItem p={2} fontSize={25}>
      {contacts.name}: {contacts.number}
      <Button onClick={() => dispatch(deleteContact(contacts.id))}>
        <DeleteIcon boxSize={5} />
      </Button>
    </ListItem>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};