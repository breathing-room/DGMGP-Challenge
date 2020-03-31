const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { API_KEY, API_HOST } = process.env;

const openWeatherAPICall = (q) => {
    axios({
        "method":"GET",
        "url":"https://community-open-weather-map.p.rapidapi.com/forecast",
        "headers": {
            "content-type":"application/octet-stream",
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        },
        "params": {
            "q": q,
            "cnt":"5"
            }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
    }


export default openWeatherAPICall;

// https://rapidapi.com/community/api/open-weather-map?endpoint=apiendpoint_f719676c-072b-4a2d-ad2e-78f8375ea9c8