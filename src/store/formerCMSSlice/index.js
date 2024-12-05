import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
  'https://jankalyanfrontwebapi.rajasthan.gov.in/api/JankalyanHome';

export const fetchFormerCMS = createAsyncThunk(
  'formerCMS/fetchList',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/GetAchievementListBySearchFilter?isRequiredAttachImages=true`,
        {
          IndexModel: {
            AdvanceSearchModel: {},
            PageSize: 101,
            IsPostBack: false,
            OrderByAsc: 1,
            Search: null,
            OrderBy: 'Priority',
            Page: 1,
          },
          DepartmentCode: 980,
          OfficeCode: 0,
          EntryTypeCode: 52,
          JankalyanCategoryCode: 532,
          LookupCode: 0,
          CategoryCode: 59,
          SubCategoryCode: 491,
        },
      );
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch data');
    }
  },
);

const formerCMSSlice = createSlice({
  name: 'formerCMS',
  initialState: {
    cms: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFormerCMS.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFormerCMS.fulfilled, (state, action) => {
        state.loading = false;
        state.cms = action.payload|| [];
      })
      .addCase(fetchFormerCMS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default formerCMSSlice.reducer;
