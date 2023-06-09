import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserListState, User } from '../../types';

const initialState: UserListState = {
  users: [],
  status: 'pending',
  error: '',
};

export const fetchUserList = createAsyncThunk(
  'jsonplaceholder/users',
  async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  }
);

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload.map((user: User) => {
          return { name: user.name, email: user.email, phone: user.phone };
        });
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const userListReducer = userListSlice.reducer;