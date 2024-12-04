import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL =
  'https://jankalyanfrontwebapi.rajasthan.gov.in/PublicPortal/DepartmentWebsite';

export const fetchMegaEvents = createAsyncThunk(
  'megaEvents/fetch',
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
        VIPCategoryCode: '96',
        VIPPersonCode: 47,
        SubCat_GECatTypeCode: 31183,
        PressReleaseLevelCode: 30204,
        CMOPRCategoryCode: 31128,
      });
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch mega events',
      );
    }
  },
);

const megaEventsSlice = createSlice({
  name: 'megaEvents',
  initialState: {
    megaEvents: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMegaEvents.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMegaEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.megaEvents = action.payload;
      })
      .addCase(fetchMegaEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default megaEventsSlice.reducer;
