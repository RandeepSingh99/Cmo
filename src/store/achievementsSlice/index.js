import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../utils/constants/uri';

export const fetchAchievementList = createAsyncThunk(
  'achievements/fetchList',
  async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/GetAchievementListBySearchFilter?isRequiredAttachImages=false`,
        {
          AdmDepartmentCode: 0,
          DepartmentCode: 980,
          CategoryCode: '66',
          SubCategoryCode: 0,
          ToDate: '',
          FromDate: '',
          SearchKeyword: '',
          IsURLRequired: false,
          IsImageRequired: false,
          IsPDFRequired: false,
          IsActive: true,
          IsVisibleInHome: null,
          IsVisibleInFront: null,
          IndexModel: {
            AdvanceSearchModel: {},
            PageSize: 5,
            IsPostBack: false,
            OrderByAsc: 1,
            Search: null,
            OrderBy: 'Priority',
            Page: 1,
          },
          IsBase64File: false,
        },
      );
      return response.data.Data.Data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAchievementList.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchAchievementList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAchievementList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default achievementsSlice.reducer;
