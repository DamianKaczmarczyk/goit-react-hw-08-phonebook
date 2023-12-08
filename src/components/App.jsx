import React, { useEffect } from 'react';

import ContactForm from './contactForm/ContactForm';
import FilterName from './FilterName/FilterName';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchContacts } from 'redux/reducers/contacts/operations';
import Navigation from './Navigation/Navigation';
import Register from './Register/Register';
import Loging from './Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './PrivateRoute/ProtectedRoute';
import { me } from 'redux/reducers/auth/operations';
import { Heading, Box } from '@chakra-ui/react';
import Home from './Home/Home';

const App = () => {
  const filter = useSelector(state => state.filter);

  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const getFilterName = () => {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(me());
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  if (error) return <p>{error}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute element={<Register />} redirect="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<ProtectedRoute element={<Loging />} redirect="/contacts" />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute
              element={
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  gap={10}
                  border="1px"
                  borderColor="gray.300"
                  mt={10}
                  py={30}
                  boxShadow="dark-lg"
                  p="4"
                  rounded="md"
                  bg="white"
                >
                  <Heading>Phonebook</Heading>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection={'column'}
                    gap={10}
                    py={30}
                  >
                    <ContactForm />
                    <Heading>Contacts</Heading>
                    <FilterName />
                    <ContactList getFilterName={getFilterName} />
                  </Box>
                </Box>
              }
              redirect="/login"
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;