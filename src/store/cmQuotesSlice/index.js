import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCMQuotes = createAsyncThunk(
  'cmQuotes/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://rajadvtapi.rajasthan.gov.in/api/JankalyanHome/GetRajAdvtSideBarData`, {
        params: {
          deptCode: 0,
          pageSize: -1,
        },
      });
      return response.data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const cmQuotesSlice = createSlice({
  name: 'cmQuotes',
  initialState: {
    quotes: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCMQuotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCMQuotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quotes = action.payload;
      })
      .addCase(fetchCMQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cmQuotesSlice.reducer;
