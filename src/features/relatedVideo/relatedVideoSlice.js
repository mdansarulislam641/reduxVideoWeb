import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

// initialsState 
const initialState = {
    relatedVideos : [],
    isError : false ,
    loading : false ,
    error : ''
};

// relatedVideo async thunk 
export const relatedVideosFetchAsync = createAsyncThunk('relatedVideosFetchAsync',
    async ({id , tags}) => {
    const relatedVideos = await (getRelatedVideos({id , tags}));
        return relatedVideos ;
    }
)

// reducer slice 
const relatedVideosSlice = createSlice({
    name :'relatedVideos',
    initialState ,
    extraReducers:(builder) =>{
        builder
        .addCase(relatedVideosFetchAsync.pending , (state)=>{
            state.loading = true ;
            state.isError = false ;
            state.relatedVideos = []
            
        })
        .addCase(relatedVideosFetchAsync.fulfilled , (state , action ) =>{
            state.relatedVideos = action.payload ;
            state.isError = false ;
            state.loading = false ;
            state.error = '';
        })
        .addCase(relatedVideosFetchAsync.rejected, (state , action ) =>{
            state.relatedVideos = [];
            state.isError = true ;
            state.error = action.error?.message
        })
    }
});

export default relatedVideosSlice.reducer ;