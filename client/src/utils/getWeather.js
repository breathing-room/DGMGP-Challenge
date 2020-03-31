import axios from 'axios';

const getWeather = (q) => {
    return axios.get('/weather', {
        params: {
            q: 'New Orleans'
        }
    })
}

export default getWeather;