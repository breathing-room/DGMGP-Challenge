import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
import './Forecast.css'

const Forecast = ({ main, date, description }) => {
    const desc = description[0].main.toLowerCase();
    // Retrieve weather icon from Open Weather Map API
    const iconUrl = `https://openweathermap.org/img/wn/${description[0].icon}.png`
    // Convert Unix date into day of the week
    const day = moment.unix(date).format('dddd');
    return (
        <div className='container'> 
            <div className='main-content'>
                <h3>{day}</h3>
                <div className='weather-icon'>
                    <img src={iconUrl} alt='Weather Icon'/>
                </div>
                <h4>{main}° F</h4>
                <p className='description'>{desc}</p>
            </div>
        </div>
    )
}

Forecast.propTypes = {
    main: PropTypes.number,
    date: PropTypes.number,
    description: PropTypes.array,
}

export default Forecast;