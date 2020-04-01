import axios from 'axios';

const getWeather = (q) => {
    return axios.get('/weather', {
        params: {
            q: q
        }
    })
}

export default getWeather;