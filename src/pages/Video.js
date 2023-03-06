import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RelatedVideo from '../components/relatedVideoList/RelatedVideo';
import Loading from '../components/ui/Loading';
import VideoDescription from '../components/videoShow/VideoDescription';
import VideoPlayer from '../components/videoShow/VideoPlayer';
import { videoFetchAsync } from '../features/video/videoSlice';

const Video = () => {
    const dispatch = useDispatch();
    // id get from react router dom 
    const {videoId} = useParams();
    // get video from store 
    const {video , isError , error , loading} = useSelector((state) => state.video);
    const {title , link , id ,tags } = video || {} ;
    useEffect(()=>{
        dispatch(videoFetchAsync(videoId))
    },[dispatch , videoId]);

    // decide what render 
    let content = null ;
    if(loading) content = <Loading/>;
    if(!loading && isError ) content = <div>{error}</div>;
    if(!loading && !isError && !video?.id) content = <div>No video Found!!!</div>
    if(!loading && !isError && video?.id) content = <>  <div class="col-span-full w-full space-y-8 lg:col-span-2">
    <VideoPlayer title={title} link={link}/>

   <VideoDescription video={video}/>
  </div>
    <div>
        <RelatedVideo tags={tags} relatedVideoId ={id}/>
    </div>

  </>
    return (
    
            <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">
                   {content}
                </div>
            </div>
        </section>
    );
};

export default Video;