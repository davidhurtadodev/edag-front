import { configureStore } from '@reduxjs/toolkit';
import teamSlice from './teamsSlice';

export const store = configureStore({
  reducer: {
    teams: teamSlice,
  },
});
