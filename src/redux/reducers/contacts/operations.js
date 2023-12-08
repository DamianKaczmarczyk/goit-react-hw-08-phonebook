import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);

      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.massage);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`/contacts`, data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.massage);
    }
  }
);