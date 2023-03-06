import { createSlice } from "@reduxjs/toolkit";

// initialState 
const initialState = {
    selectedTags : [],
    searchText : 'hel'
};

// storage slice 
const filterSlice = createSlice({
    name : 'filter',
    initialState ,
    reducers: {
        selectTag : (state , action)=>{
          
            state.selectedTags.push(action.payload);
        },
        removeTag : (state , action) =>{
          
                 state.selectedTags = state.selectedTags.filter(tag => tag !== action.payload);
            
        },
        searchFilter : (state , action ) =>{
            state.searchText = action.payload
        }
    }
});

export default filterSlice.reducer ;
export const {selectTag , removeTag } = filterSlice.actions ;