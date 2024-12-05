import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../utils/constants/uri';

export const fetchAwards = createAsyncThunk(
  'awards/fetch',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/GetAchievementListBySearchFilter?isRequiredAttachImages=true`,
        {
          AdmDepartmentCode: 0,
          DepartmentCode: 0,
          CategoryCode: '3',
          SubCategoryCode: 0,
          ToDate: '2024-10-18',
          FromDate: '2023-12-15',
          SearchKeyword: '',
          IsURLRequired: false,
          IsImageRequired: false,
          IsPDFRequired: false,
          IsActive: true,
          IsVisibleInHome: null,
          IsVisibleInFront: null,
          IndexModel: {
            AdvanceSearchModel: {},
            PageSize: 12,
            IsPostBack: false,
            OrderByAsc: 0,
            Search: null,
            OrderBy: 'AchievementDate',
            Page: 1,
          },
          IsBase64File: false,
        },
      );
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch awards');
    }
  },
);

const awardsSlice = createSlice({
  name: 'awards',
  initialState: {
    awardList: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAwards.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAwards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.awardList = action.payload || [];
      })
      .addCase(fetchAwards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default awardsSlice.reducer;
