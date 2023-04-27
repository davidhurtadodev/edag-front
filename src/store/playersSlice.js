import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import playersService from '@/lib/services/playersService';
// Initial state

const initialState = {
  value: [],
  status: 'idle',
};

// Fetching thunk
export const fetchPlayersAsync = createAsyncThunk(
  'players/fetchPlayers',
  async () => {
    const data = await playersService.getData();

    return data;
  }
);

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //cases for fetching recipes
      .addCase(fetchPlayersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlayersAsync.fulfilled, (state, action) => {
        state.status = 'idle';

        const data = action.payload;

        state.value = data;
      })
      .addCase(fetchPlayersAsync.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default playersSlice.reducer;
