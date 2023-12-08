import { useAuth } from 'hook/useAuth';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logout } from 'redux/reducers/auth/operations';
import { selectEmail } from 'redux/reducers/auth/selectors';
import { IoHome } from 'react-icons/io5';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  const email = useSelector(selectEmail);
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink
          fontSize={20}
          href="/goit-react-hw-08-phonebook/contacts"
        >
          Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>

      <Box ml={150} display="flex" alignItems="center" gap={5}>
        <Text>{email}</Text>
        <Button colorScheme="blue" onClick={handleClick}>
          Logout
        </Button>
      </Box>
    </>
  );
};

const UnauthenticatedNav = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink fontSize={20} href="/goit-react-hw-08-phonebook/register">
        Register
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink fontSize={20} href="/goit-react-hw-08-phonebook/login">
        Login
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <Box m={15} ms={15}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="1px"
        borderColor="gray.300"
        boxShadow="dark-lg"
        p="4"
        rounded="md"
        bg="teal"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontSize={20} href="/goit-react-hw-08-phonebook/">
              <IoHome />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
        </Breadcrumb>
      </Box>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Box>
  );
}