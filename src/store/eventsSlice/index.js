import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants/uri';

export const fetchEvents = createAsyncThunk(
  'events/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/GetAchievementListBySearchFilter?isRequiredAttachImages=true`,
        {
          IndexModel: {
            AdvanceSearchModel: {},
            PageSize: 10000,
            IsPostBack: false,
            OrderByAsc: 1,
            Search: null,
            OrderBy: 'AchievementDate',
            Page: 1,
          },
          DepartmentCode: 980,
          OfficeCode: 0,
          EntryTypeCode: 0,
          JankalyanCategoryCode: 0,
          LookupCode: 0,
          IsCMUpcomingEvt: true,
          CategoryCode: 133,
        }
      );
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default eventsSlice.reducer;
