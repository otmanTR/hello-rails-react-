import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greetings/greetingsSlice';

const store = configureStore({
  reducer: {
    greeting: greetingsSlice,
  },
});

export default store;