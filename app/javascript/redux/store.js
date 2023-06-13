import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetingss/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;