import axios from 'axios';

const geolocate = async () => {
    // Try HTML5 geolocation.
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
    } else {
        getCoordinates()
            .then((position) => {
                const { latitude, longitude } = position.coords;
                getCityByCoords(latitude, longitude);
            })
            .catch(err => console.log(err));
    }   
}

const getCoordinates = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
}

const getCityByCoords = (lat, lng) => {
    axios.get('/city', {
        params: {
            lat,
            lng
        }
    }).then((response) => {
        return response.data;
    }).catch(err => console.log(err));
}

export default geolocate;