import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants/uri';

// Async thunk to fetch menu list for the department
export const fetchMenuList = createAsyncThunk(
  'menuList/fetch',
  async (departmentCode = 980, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/GetMenuListForDepartment?dptCode=${departmentCode}`);
      return response.data.Data.Data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Slice for managing menu list data
const menuListSlice = createSlice({
  name: 'menuList',
  initialState: {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenuList.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMenuList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default menuListSlice.reducer;
