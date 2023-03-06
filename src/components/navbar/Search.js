import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import searchImage from '../../assets/search.svg';
import { searchFilter } from '../../features/filter/filterSlice';
const Search = () => {
    const {searchText} = useSelector(state => state.selectedTag);
    // console.log(searchText)
    const [input , setInput] = useState(searchText);
    const dispatch = useDispatch();
    const match = useMatch('/');
    const navigate = useNavigate();

    const handleSearch = (event) =>{
        event.preventDefault();
        dispatch(searchFilter(input))
        if(!match){
            navigate('/');
        }

    }
    return (
        <div
        className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
    >
        <form onSubmit={handleSearch}>
            <input onChange={(e)=>setInput(e.target.value)}
            value={input}
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
            />
        </form>
        <img
            className="inline h-4 cursor-pointer"
            src={searchImage}
            alt="Search"
        />
    </div>
    );
};

export default Search;