import { configureStore } from '@reduxjs/toolkit';
import achievementsReducer from './achievementsSlice';
import menuListReducer from './menuListSlice';
import departmentContactSlice from './departmentContactSlice';

const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
    menuList: menuListReducer,
    departmentContactDetails: departmentContactSlice,
  },
});

export default store;
