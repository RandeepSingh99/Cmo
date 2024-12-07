import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCMEvents = createAsyncThunk(
  'cmEvents/fetchCMEvents',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'https://jankalyanfrontwebapi.rajasthan.gov.in/PublicPortal/DepartmentWebsite/GetPressReleaseByFilter',
        {
          AdvanceSearchModel: {},
          CategoryCode: 36,
          DepartmentCode: 980,
          Description: '',
          DistrictDepartmentCode: 0,
          GroupType: '',
          IsBase64File: false,
          IsLokarpanInauguration: false,
          IsPostBack: false,
          OrderBy: 'PressreleaseDate',
          OrderByAsc: 0,
          Page: 1,
          PageSize: 8,
          PressReleaseFromDate: '2023-12-15',
          PressReleaseLevelCode: 30204,
          PressReleaseToDate: '2024-12-07',
          Search: null,
          SubCat_GECatTypeCode: 31183,
          SubCategoryCode: 0,
          VIPCategoryCode: '96',
          VIPPersonCode: 47,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);

const cmEventsSlice = createSlice({
  name: 'cmEvents',
  initialState: {
    list: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCMEvents.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCMEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload || [];
      })
      .addCase(fetchCMEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default cmEventsSlice.reducer;
