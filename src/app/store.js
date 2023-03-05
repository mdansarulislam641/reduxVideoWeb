import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videoSlice';
import tagReducer from '../features/tags/tagsSlice';
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags : tagReducer
  },
});
