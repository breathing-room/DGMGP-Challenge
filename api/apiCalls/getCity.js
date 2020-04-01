const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { GOOGLE_API_KEY } = process.env;

const getCity = (lat, lng) => {
    return axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            latlng: `${lat},${lng}`,
            result_type: 'locality',
            key: GOOGLE_API_KEY
            }
        })
}

module.exports = getCity;