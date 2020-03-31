import React from 'react';
import moment from 'moment';
import './Forecast.css'

const Forecast = ({ main, date, description }) => {
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
                <h4>
                    <div>
                        {main}° F
                    </div>
                </h4>
            </div>
        </div>
    )
}

export default Forecast;