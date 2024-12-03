import {configureStore} from '@reduxjs/toolkit';
import achievementsReducer from './achievementsSlice';
import menuListReducer from './menuListSlice';
import departmentContactSlice from './departmentContactSlice';
import eventsSlice from './eventsSlice';
import cmQuotesReducer from './cmQuotesSlice';
import photoGalleryReducer from './photoGallerySlice';

const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
    menuList: menuListReducer,
    departmentContactDetails: departmentContactSlice,
    eventList: eventsSlice,
    cmQuotes: cmQuotesReducer,
    photoGallery: photoGalleryReducer,
  },
});

export default store;
