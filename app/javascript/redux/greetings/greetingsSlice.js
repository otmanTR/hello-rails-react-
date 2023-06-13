import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    greeting: '',
    error: null
  };

  export const getRandomGreeting = createAsyncThunk('getRandomGreeting', async () => {
    try {
        const response = await axios.get('/api/v1/greetings')
        const data = response.data;
        return data;
    } catch (error) {
        return error.message
    }
})

 export const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(getRandomGreeting.fulfilled, (state, action) => {
         state.greeting = action.payload
        });
    },

  });

export default greetingsSlice.reducer;