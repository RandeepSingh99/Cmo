import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCMRelief = createAsyncThunk(
  'cmRelief/fetchCMRelief',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://cmrelief.rajasthan.gov.in/API/Api_CMRF.aspx?Action=AllCMRF',
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch CM speeches',
      );
    }
  },
);

const cmReliefSlice = createSlice({
  name: 'cmRelief',
  initialState: {
    info: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCMRelief.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCMRelief.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload || []; // Assign response data here
      })
      .addCase(fetchCMRelief.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      });
  },
});

export default cmReliefSlice.reducer;
