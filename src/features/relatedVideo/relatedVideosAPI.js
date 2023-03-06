import axios from '../../Axios/axios';
// http://localhost:9000/videos?tags_like=javascript&tags_like=react&id_ne=1&_limit=5

export const getRelatedVideos = async({id , tags}) =>{
    const limit = 5 ;
    const searchTag = tags?.length > 0 ? tags.map(tag =>`tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}`
    const response = await axios.get(`/videos?${searchTag}`);
    return response.data ;
}