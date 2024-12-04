import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants/uri';

export const fetchCMSpeeches = createAsyncThunk(
  'cmSpeeches/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/GetVideoList`, {
        AdvanceSearchModel: {
          CategoryCode: '126',
          DepartmentCode: '85',
          SubCategoryCode: 0,
          Search: '',
        },
        PageSize: 9,
        IsPostBack: false,
        OrderByAsc: 0,
        OrderBy: 'AchievementDATE',
        Page: 1,
        ToDate: '2024-10-18',
        FromDate: '2023-12-15',
      });
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch CM speeches');
    }
  }
);

const cmSpeechesSlice = createSlice({
  name: 'cmSpeeches',
  initialState: {
    videos: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCMSpeeches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCMSpeeches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.videos = action.payload;
      })
      .addCase(fetchCMSpeeches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cmSpeechesSlice.reducer;
