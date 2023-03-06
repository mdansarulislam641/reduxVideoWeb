import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { videosAsync } from '../../features/videos/videoSlice';
import VideoGridItem from './VideoGridItem';
import Loading from '../ui/Loading';
const VideoGrid = () => {
    const dispatch = useDispatch();
    const videosData = useSelector((state)=>state.videos);
    const {isError , error , loading , videos: videos} = videosData ;
    const {selectedTags:searchTags, searchText} = useSelector(state => state.selectedTag);

    useEffect(()=>{
        dispatch(videosAsync({searchTags , searchText}))
    },[dispatch,searchTags,searchText]);

    let content ;
    if(loading) content = <Loading/>
    if(isError && !loading) content = <div className="col-span-12">{error}</div>
    if(!isError && !loading && videos?.length === 0) content = <div>No videos found</div>
    if(!isError && !loading && videos?.length > 0)  {
       content = videos?.map(video =>  <VideoGridItem video={video} key={video.id}/>)
}  

    return (
        <section className="pt-12">
        <section className="pt-12">
            <div
                className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
            >
             {content}
            </div>
        </section>
    </section>
    );
};

export default VideoGrid;