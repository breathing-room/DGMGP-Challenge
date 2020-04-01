import axios from 'axios';

const getCityByCoords = (lat, lng) => {
    return axios.get('/city', {
        params: {
            lat,
            lng
        }
    })
}

export default getCityByCoords