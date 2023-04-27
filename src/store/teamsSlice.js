import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import teamsService from '@/lib/services/teamsService';
// Initial state

const initialState = {
  value: [],
  status: 'idle',
};

// Fetching thunk
export const fetchTeamsAsync = createAsyncThunk(
  'teams/fetchTeams',
  async () => {
    const data = await teamsService.getData();
    console.log(data);
    return data;
  }
);

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //cases for fetching recipes
      .addCase(fetchTeamsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeamsAsync.fulfilled, (state, action) => {
        state.status = 'idle';

        const data = action.payload;

        state.value = data;
      })
      .addCase(fetchTeamsAsync.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default teamsSlice.reducer;
