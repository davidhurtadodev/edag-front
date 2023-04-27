import { configureStore } from '@reduxjs/toolkit';
import teamSlice from './teamsSlice';
import playersSlice from './playersSlice';

export const store = configureStore({
  reducer: {
    teams: teamSlice,
    players: playersSlice,
  },
});
