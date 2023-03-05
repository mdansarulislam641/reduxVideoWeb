import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Tags from '../components/tags/Tags';
import VideoGrid from '../components/videoGrid/VideoGrid';
import Pagination from '../components/ui/Pagination';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <>
            <Tags/>
            <VideoGrid/>
            <Pagination/>
        </>
    );
};

export default Home;