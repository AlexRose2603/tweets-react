import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64553f02a74f994b33561f81.mockapi.io/tweets/api/';

const initialPage = 1;
const limit = 6;

export const fetchUsers = createAsyncThunk(
  'tweets/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tweets', {
        params: { page: initialPage, limit },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMoreCards = createAsyncThunk(
  '/tweets/fetchMoreCards',
  async (_, thunkAPI) => {
    try {
      const page = thunkAPI.getState().tweets.page;
      const nextPage = page + 1;
      const startIndex = (nextPage - 1) * limit;
      const response = await axios.get(
        `/tweets?page=${startIndex}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addFollower = createAsyncThunk(
  'tweets/addFollower',
  async (userId, thunkAPI) => {
    try {
      await axios.post(`/tweets/${userId}/followers`, { userId });
      return { userId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteFollower = createAsyncThunk(
  'tweets/deleteFollower',
  async (userId, thunkAPI) => {
    try {
      await axios.delete(`/tweets/${userId}/followers/${userId}`);
      return { userId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
