import axios from '../../Axios/axios';
export const getVideos = async() =>{
    const response = await axios.get('/videos');
    return response.data ;
}