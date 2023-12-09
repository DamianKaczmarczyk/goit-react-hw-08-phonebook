import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/reducers/auth/operations';
import { Input, Button, Box } from '@chakra-ui/react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({
        name: username,
        email: email,
        password: password,
      })
    );
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap={10}
      border="1px"
      borderColor="gray.200"
      mt={100}
      py={30}
      boxShadow="dark-lg"
      p="20"
      rounded="md"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            type="text"
            name="username"
            placeholder="Your name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            width="auto"
          />
        </label>
        <label>
          Email:
          <Input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="Your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            width="auto"
          />
        </label>
        <label>
          Password:
          <Input
            type="password"
            name="password"
            placeholder="Your pasword"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            width="auto"
          />
        </label>
        <Button colorScheme="blue" type="submit">
          Register
        </Button>
      </form>
    </Box>
  );
}