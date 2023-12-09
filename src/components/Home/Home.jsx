import { Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/reducers/auth/selectors';

export default function Home() {
  const user = useSelector(selectUser);
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={'column'}
      gap={10}
      border="1px"
      borderColor="gray.300"
      mt={100}
      py={30}
      boxShadow="dark-lg"
      p="5"
      rounded="md"
      bg="white"
    >
      <Heading>Phonebook</Heading>
      <Heading>Welcome {user}!</Heading>
    </Box>
  );
}