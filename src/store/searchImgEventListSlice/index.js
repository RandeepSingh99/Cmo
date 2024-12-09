import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearchImgEventList = createAsyncThunk(
  'searchImgEventList/fetchSearchImgEventList',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://momentswithcm.rajasthan.gov.in/list_events/',
      );
      return response.data.events; // Assuming response.data contains the event list
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const searchImgEventListSlice = createSlice({
  name: 'searchImgEventList',
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSearchImgEventList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchImgEventList.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload || [];
      })
      .addCase(fetchSearchImgEventList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchImgEventListSlice.reducer;
