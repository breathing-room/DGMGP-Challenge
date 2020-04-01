import axios from 'axios';

// Call to our API to make the request to Open Weather API
// to retrieve weather based on city
const getWeather = (q) => {
	return axios.get('/weather', {
		params: {
			q: q
		}
	})
}

export default getWeather;