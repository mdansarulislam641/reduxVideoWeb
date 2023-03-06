import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videoSlice';
import tagReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import relatedVideoReducer from '../features/relatedVideo/relatedVideoSlice';
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags : tagReducer,
    video : videoReducer ,
    relatedVideos : relatedVideoReducer
  },
});
