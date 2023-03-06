import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

// initialState 
const initialState = {
    video : {},
    isError : false ,
    loading : false ,
    error : ""
};

// video async thunk 
export const videoFetchAsync = createAsyncThunk('video/videoFetch',
async (id)=>{
    const video = await (getVideo(id));
    return video ;
})

// video slice store 
const videoSlice = createSlice({
    name: "video",
    initialState ,
    extraReducers: (builder)=>{
        builder
        .addCase(videoFetchAsync.pending , (state) =>{
            state.loading = true ;
            state.isError = false ;
            state.video = {};
        })
        .addCase(videoFetchAsync.fulfilled , (state, action )=>{
            state.isError = false ;
            state.loading = false ;
            state.video = action.payload ;
            state.error = ''
        })
        .addCase(videoFetchAsync.rejected , (state , action )=>{
            state.error = action.error?.message ;
            state.video = {};
            state.isError = true
        })
    }
});

export default videoSlice.reducer ;