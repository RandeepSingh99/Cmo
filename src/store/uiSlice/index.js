import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  followUsModal: false,
  language: 'English',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setFollowUsModal: (state, action) => {
      state.followUsModal = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const {setFollowUsModal, setLanguage} = uiSlice.actions;

export default uiSlice.reducer;
