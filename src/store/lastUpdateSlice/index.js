import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch department details with dynamic params
export const fetchLastUpdate = createAsyncThunk(
  'lastUpdate/fetchLastUpdate',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        `https://jankalyanfrontwebapi.rajasthan.gov.in//PublicPortal/DepartmentWebsite/GetDepartmentDetailByDptCode?dptCode=980&isBannerRequired=true&isNewsTickerRequired=true&isExternalLinkRequired=true`,
      );
      return response.data.Data.BuildUploadedOn;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const lastUpdateSlice = createSlice({
  name: 'lastUpdate',
  initialState: {
    lastUpdate: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLastUpdate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLastUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.lastUpdate = action.payload || '';
      })
      .addCase(fetchLastUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default lastUpdateSlice.reducer;
