import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

// initialState 
const initialState = {
    loading : false ,
    tags : [],
    isError : false ,
    error : ''
    
};

export const tagsFetchAsync = createAsyncThunk('tags/fetchTags',
    async () =>{
        const tags = await getTags();
        return tags ;
    });

// tags slice reducers 
const tagsSlice = createSlice({
    name: 'tags',
    initialState , 
    extraReducers:(builder) =>{
        builder
        .addCase(tagsFetchAsync.pending , (state) =>{
            state.isError = false ;
            state.loading = true ;
            state.tags = []
        })
        .addCase(tagsFetchAsync.fulfilled , (state , action) =>{
            state.loading = false ;
            state.isError = false ;
            state.tags = action.payload
        })
        .addCase(tagsFetchAsync.rejected , (state , action) =>{
            state.isError = true ;
            state.loading = false ;
            state.tags = [];
            state.error = action.error?.message
        })
    }
});

export default tagsSlice.reducer ;