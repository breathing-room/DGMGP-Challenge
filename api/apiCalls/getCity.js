const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { GOOGLE_API_KEY } = process.env;

const getCity = (lat, lng) => {
    axios({
        "method":"GET",
        "url":"https://maps.googleapis.com/maps/api/geocode/json",
        "params": {
            "latlng": `${lat},${lng}`,
            "result_type": "locality",
            "key": GOOGLE_API_KEY
            }
        })
        .then((response)=>{
          console.log(response.data.results[0].address_components[0].long_name);
        })
        .catch((error)=>{
          console.log(error)
        })
}

module.exports = getCity;