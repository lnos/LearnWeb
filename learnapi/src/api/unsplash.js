import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID a74843272610528434af31f3753639279b06fbe45837f037024a7ca9650d5ba6'
    }
});