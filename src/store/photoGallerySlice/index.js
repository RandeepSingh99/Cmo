import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
  'https://jankalyanfrontwebapi.rajasthan.gov.in/PublicPortal/DepartmentWebsite';

export const fetchPhotoGallery = createAsyncThunk(
  'photoGallery/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/GetDIPRPressReleaseByFilter`,
        {
          AdvanceSearchModel: {},
          PageSize: 9,
          IsPostBack: false,
          OrderByAsc: 0,
          Search: null,
          OrderBy: 'PressreleaseDate',
          Page: 1,
          IsLokarpanInauguration: false,
          GroupType: '',
          DistrictDepartmentCode: 0,
          SubCategoryCode: 0,
          DepartmentCode: 980,
          CategoryCode: 36,
          IsHomePageUrl: 1,
          PressReleaseToDate: '2024-10-18',
          PressReleaseFromDate: '2023-12-15',
          SearchKeyword: '',
          IsBase64File: false,
          VIPCategoryCode: '96',
          VIPPersonCode: 47,
        }
      );
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const photoGallerySlice = createSlice({
  name: 'photoGallery',
  initialState: {
    gallery: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotoGallery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhotoGallery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.gallery = action.payload;
      })
      .addCase(fetchPhotoGallery.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default photoGallerySlice.reducer;
