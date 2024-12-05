import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../utils/constants/uri';

export const fetchImportantLinks = createAsyncThunk(
  'importantLinks/fetch',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/GetAchievementListBySearchFilter?isRequiredAttachImages=false`,
        {
          AdmDepartmentCode: 0,
          DepartmentCode: 980,
          CategoryCode: '71',
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
            PageSize: 101,
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
      return rejectWithValue(
        error.response?.data || 'Failed to fetch important links',
      );
    }
  },
);

const importantLinksSlice = createSlice({
  name: 'importantLinks',
  initialState: {
    links: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchImportantLinks.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchImportantLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.links = action.payload || [];
      })
      .addCase(fetchImportantLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default importantLinksSlice.reducer;
