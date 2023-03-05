import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

// initialState 
const initialState = {
    loading : false ,
    videos : [],
    isError : false ,
    error : "",
};

// api request async thunk
export const videosAsync = createAsyncThunk(
    "videos/fetchVideos",
    async() =>{
        const videos = await getVideos();
        return videos ;
    }
);

// create videos slice 
const videoSlice = createSlice({
    name : 'videos',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(videosAsync.pending , (state) =>{
            state.isError = false ;
            state.loading = true
        })
        .addCase(videosAsync.fulfilled , (state , action) =>{
            state.isError = false ;
            state.videos = action.payload;
            state.loading = false
        })
        .addCase(videosAsync.rejected , (state, action) =>{
            state.loading = false ;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message
        })
    }
});

export default videoSlice.reducer ;