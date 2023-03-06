import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTag, selectTag } from '../../features/filter/filterSlice';

const Tag = ({title}) => {
    // get selected tag from store 
    const {selectedTags} = useSelector(state => state.selectedTag);
    const dispatch = useDispatch();

    const checkSelectTag = selectedTags.includes(title);
    const style =checkSelectTag ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer" ;

    // selected Tag 
    const handleSelectTag = (title) =>{
        if(!checkSelectTag){
            dispatch(selectTag(title))
        }
        else{
            dispatch(removeTag(title))
        }
        // console.log(title)
    }
    return (
        <div onClick={()=>handleSelectTag(title)}
                className={style}
            >
             {title}
            </div>
           
    );
};

export default Tag;