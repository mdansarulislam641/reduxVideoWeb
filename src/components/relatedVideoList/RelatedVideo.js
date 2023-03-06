import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { relatedVideosFetchAsync } from '../../features/relatedVideo/relatedVideoSlice';
import Loading from '../ui/Loading';
import RelatedVideosItem from './RelatedVideosItem';

const RelatedVideo = ({tags , relatedVideoId :id}) => {
    
const dispatch = useDispatch();
const {relatedVideos , loading , isError , error} = useSelector(state => state.relatedVideos);
console.log(relatedVideos)
    useEffect(()=>{
        dispatch(relatedVideosFetchAsync({id , tags}))
    },[dispatch, id , tags]);

    let content = null ;
    if(loading) content = <Loading/>
    if(!loading && isError) content = <div>{error}</div>;
    if(!loading && !isError && !relatedVideos?.length > 0) content = <div>No Videos Found!!!</div>
    if(!loading && !isError && relatedVideos.length > 0) content = relatedVideos.map(video =>  <RelatedVideosItem video={video} key={video.id}/>)


    return (
        <div
        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
    >
       {content}
    </div>
    );
};

export default RelatedVideo;