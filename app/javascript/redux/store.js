import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsSlice
  },
});

export default store;