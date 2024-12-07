import {combineReducers, configureStore} from '@reduxjs/toolkit';
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
import cmSpeechesReducer from './cmSpeechesSlice';
import importantLinksReducer from './importantLinksSlice';
import cmReliefSlice from './cmReliefSlice';
import uiSlice from './uiSlice';
import formerCMSSlice from './formerCMSSlice';
import {persistReducer, persistStore} from 'redux-persist';
import {reduxStorage} from '../storage';
import cmEventsReducer from './cmEventsSlice';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist:['menuList']
};

const rootReducer = combineReducers({
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
  cmSpeeches: cmSpeechesReducer,
  importantLinks: importantLinksReducer,
  ui: uiSlice,
  formerCM: formerCMSSlice,
  cmRelief: cmReliefSlice,
  cmEvents: cmEventsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
