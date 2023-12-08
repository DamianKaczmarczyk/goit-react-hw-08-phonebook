import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './reducers/contacts/contactsSlice';
import filterReducer from './reducers/contacts/filterSplice';
import authReducer from './reducers/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'email'],
};

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
const storePersist = persistStore(store);
export { storePersist };