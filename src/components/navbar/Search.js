import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import searchImage from '../../assets/search.svg';
const Search = () => {
    const {searchText} = useSelector(state => state.selectedTag);
    console.log(searchText)
    const [input , setInput] = useState()
    const handleSearch = (event) =>{
        event.preventDefault();
    }
    return (
        <div
        className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
    >
        <form onSubmit={handleSearch}>
            <input onChange={(e)=>setInput(e.target.value)}
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