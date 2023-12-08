import { useDispatch } from 'react-redux';
import { getFilterName } from 'redux/reducers/contacts/filterSplice';
import { Box, Input, Text } from '@chakra-ui/react';

export default function FilterName() {
  const dispatch = useDispatch();

  const handlerChangeFilter = event => {
    return dispatch(getFilterName(event.target.value));
  };
  return (
    <Box  >
      <Text fontSize={25} pb={4}>Find contacts by name</Text>

      <Input
        width="auto"
        onChange={handlerChangeFilter}
        type="text"
        name="filter"
        placeholder="Find name"
      />
    </Box>
  );
}