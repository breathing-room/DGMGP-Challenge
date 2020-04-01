import axios from 'axios';

// Call to our API to retrieve user city
// from lat/lng retrieved from HTML5 Geolocation API.
// We need a city name for making call to Open Weather Map API
const getCityByCoords = (lat, lng) => {
	return axios.get('/city', {
		params: {
			lat,
			lng
		}
	})
}

export default getCityByCoords