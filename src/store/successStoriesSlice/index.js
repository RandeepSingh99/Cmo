import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
  'https://jankalyanfrontwebapi.rajasthan.gov.in/PublicPortal/DepartmentWebsite';

export const fetchSuccessStories = createAsyncThunk(
  'successStories/fetch',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/GetPressReleaseByFilter`, {
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
        DepartmentCode: 0,
        CategoryCode: 41,
        PressReleaseToDate: '2024-10-18',
        PressReleaseFromDate: '2023-12-15',
        Description: '',
        IsBase64File: false,
        PressReleaseLevelCode: 30204,
      });
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch success stories',
      );
    }
  },
);

const successStoriesSlice = createSlice({
  name: 'successStories',
  initialState: {
    stories: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSuccessStories.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchSuccessStories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.stories = action.payload;
      })
      .addCase(fetchSuccessStories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default successStoriesSlice.reducer;
