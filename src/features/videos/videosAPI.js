import axios from '../../Axios/axios';
export const getVideos = async(searchTags , searchText) =>{
    console.log(searchTags,searchText ,"fjs")
    let queryString = '';
    if(searchTags?.length > 0){
        queryString += searchTags.map(tag => `tags_like=${tag}`).join("&");
    };
    if(searchText !== ''){
        queryString += `&q=${searchText}`
        console.log(queryString)
        console.log('this')

    }
    const response = await axios.get(`/videos?${queryString}`);
    return response.data ;
}