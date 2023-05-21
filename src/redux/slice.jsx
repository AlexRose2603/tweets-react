import { createSlice } from '@reduxjs/toolkit';
import {
  addFollower,
  deleteFollower,
  fetchMoreCards,
  fetchUsers,
} from './operations';

export const initialTweets = {
  cards: [],
  isLoading: false,
  error: null,
  page: 1,
};
const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initialTweets,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchMoreCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMoreCards.fulfilled, (state, action) => {
        state.cards = state.cards.concat(action.payload);
        state.isLoading = false;
      })
      .addCase(fetchMoreCards.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addFollower.fulfilled, (state, action) => {
        const { userId } = action.payload;
        const user = state.cards.find(card => card.id === userId);
        if (user) {
          user.followers += 1;
        }
      })
      .addCase(deleteFollower.fulfilled, (state, action) => {
        const { userId } = action.payload;
        const user = state.cards.find(card => card.id === userId);
        if (user) {
          user.followers -= 1;
        }
      }),
});
export const tweetsReducer = tweetsSlice.reducer;
