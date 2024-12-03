import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDepartmentContactDetails = createAsyncThunk(
  'departmentContactDetails/fetch',
  async () => {
    try {
      const response = await axios.post(
        `https://jankalyanfrontwebapi.rajasthan.gov.in//PublicPortal/DepartmentWebsite/GetDepartmentContactDetail`,
        {
          AdvanceSearchModel: {
            DepartmentCode: 980,
            CategoryCode: 0,
          },
          PageSize: 101,
          IsPostBack: true,
          OrderByAsc: 1,
          Search: null,
          OrderBy: 'DisplayOrderNo',
          Page: 1,
        },
      );
      return response.data.Data.Data;
    } catch (error) {
      console.log('error', error)
    }
  },
);

// Slice for managing department contact details
const departmentContactSlice = createSlice({
  name: 'departmentContactDetails',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDepartmentContactDetails.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchDepartmentContactDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDepartmentContactDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default departmentContactSlice.reducer;
