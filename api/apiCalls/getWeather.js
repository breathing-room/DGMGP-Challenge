const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { WEATHER_API_KEY, WEATHER_API_HOST } = process.env;

const getWeather = (q) => {
    return axios.get('https://community-open-weather-map.p.rapidapi.com/forecast/daily', {
        headers: {
            "content-type": 'application/octet-stream',
            "x-rapidapi-host": WEATHER_API_HOST,
            "x-rapidapi-key": WEATHER_API_KEY
        },
        params: {
            q: q,
            cnt:"5",
            units:"imperial"
            }
        })
    }

module.exports = getWeather;

// https://rapidapi.com/community/api/open-weather-map?endpoint=apiendpoint_f719676c-072b-4a2d-ad2e-78f8375ea9c8