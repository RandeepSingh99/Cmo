import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  followUsModal: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setFollowUsModal: (state, action) => {
      state.followUsModal = action.payload;
    },
  },
});

export const {setFollowUsModal} = uiSlice.actions;

export default uiSlice.reducer;
