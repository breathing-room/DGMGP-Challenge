const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { WEATHER_API_KEY, WEATHER_API_HOST } = process.env;

// Call to Open Weather Map's API to retrieve 5-day weather forecast based on location (as city)
const getWeather = (q) => {
	return axios.get('https://community-open-weather-map.p.rapidapi.com/forecast/daily', {
		headers: {
			'content-type': 'application/octet-stream',
			'x-rapidapi-host': WEATHER_API_HOST,
			'x-rapidapi-key': WEATHER_API_KEY
		},
		params: {
			q: q,
			cnt:'5',
			units:'imperial'
		}
	})
}

module.exports = getWeather;