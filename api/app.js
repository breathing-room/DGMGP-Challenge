const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

const getCity = require('./apiCalls/getCity');
const getWeather = require('./apiCalls/getWeather');

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'build/index.html'))
})

app.get(`/weather`, (req, res) => {
    console.log(req);
    const { q } = req.query;
    getWeather(q).then((response) => {
        res.send(response.data.list)
    })
    .catch(err => console.log(err));
})

app.get(`/city`, (req, res) => {
    const { lat, lng } = req.query;
    getCity(lat, lng).then((response) => {
        res.send(response.data.results[0].address_components[0].long_name);
    })
    .catch(err => console.log(err));
})

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
})