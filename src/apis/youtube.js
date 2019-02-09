import axios from 'axios';

const KEY = 'AIzaSyCS5AQ1jl1R1Esl1PVa2TXUk1IWe6Ff5VA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})