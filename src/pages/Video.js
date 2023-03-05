import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/navbar/Navbar';
import RelatedVideo from '../components/relatedVideoList/RelatedVideo';
import VideoDescription from '../components/videoShow/VideoDescription';
import VideoPlayer from '../components/videoShow/VideoPlayer';

const Video = () => {
    return (
    
            <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div class="grid grid-cols-3 gap-2 lg:gap-8">
                    <div class="col-span-full w-full space-y-8 lg:col-span-2">
                      <VideoPlayer/>

                     <VideoDescription/>
                    </div>

                    
                    <div
                        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                      <RelatedVideo/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;