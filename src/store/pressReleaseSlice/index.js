import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
  'https://jankalyanfrontwebapi.rajasthan.gov.in/PublicPortal/DepartmentWebsite';

export const fetchPressReleases = createAsyncThunk(
  'pressRelease/fetch',
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
        DepartmentCode: 980,
        CategoryCode: 36,
        IsBase64File: false,
      });
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const pressReleaseSlice = createSlice({
  name: 'pressRelease',
  initialState: {
    pressRelease: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPressReleases.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPressReleases.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pressRelease = action.payload|| [];
      })
      .addCase(fetchPressReleases.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default pressReleaseSlice.reducer;
