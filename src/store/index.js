import {configureStore} from '@reduxjs/toolkit';
import achievementsReducer from './achievementsSlice';
import menuListReducer from './menuListSlice';
import departmentContactSlice from './departmentContactSlice';
import eventsSlice from './eventsSlice';
import cmQuotesReducer from './cmQuotesSlice';
import photoGalleryReducer from './photoGallerySlice';
import pressReleaseReducer from './pressReleaseSlice';
import awardsReducer from './awardsSlice';
import megaEventsReducer from './megaEventsSlice';
import successStoriesReducer from './successStoriesSlice';

const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
    menuList: menuListReducer,
    departmentContactDetails: departmentContactSlice,
    eventList: eventsSlice,
    cmQuotes: cmQuotesReducer,
    photoGallery: photoGalleryReducer,
    pressRelease: pressReleaseReducer,
    awards: awardsReducer,
    megaEvents: megaEventsReducer,
    successStories: successStoriesReducer,
  },
});

export default store;
