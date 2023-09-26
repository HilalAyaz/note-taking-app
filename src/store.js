import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/noteSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export default store;
