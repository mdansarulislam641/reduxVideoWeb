import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    const video = await (d)
})

// video slice store 
const videoSlice = createSlice({
    name: "video",
    initialState ,
    extraReducers: (builder)=>{
        builder
        .addCase()
    }
})