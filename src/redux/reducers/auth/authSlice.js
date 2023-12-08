import { createSlice } from '@reduxjs/toolkit';
import { login, logout, me, register } from './operations';

const initialState = {
  isLoggedIn: false,
  user: null,
  email: null,
  token: null,
  isLoding: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user.name;
        state.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(me.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.data.name;
      })
      .addCase(me.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;