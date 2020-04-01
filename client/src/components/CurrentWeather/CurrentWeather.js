import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CurrentWeather.css'

const CurrentWeather = ({ currentDay, city }) => {
      // Format current day and time
      const time = moment().format('h:hh A');
      const day = moment().format('dddd');
      // Retrieve weather icon from Open Weather Map API
      const iconUrl = `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`
      return (
          <div className='current-container' data-testid='current-weather'> 
              <div className='current-main-content'>
                <h1 className='current-city'>{city}</h1>
                  <div className='current-weather-icon'>
                      <img src={iconUrl} alt='Weather Icon'/>
                  </div>
                  <h2 className='current-temp'>
                        {currentDay.temp.day}° F
                  </h2>
              </div>
              <div className='current-description-container'> 
                <span className='time-day'>
                    <h3 className='current-day'>{day}</h3>
                    <h3 className='current-time'>{time}</h3>
                </span>
                    <h3 className='current-description'>{currentDay.weather[0].description}</h3>
                    <div className='extra-details'>
                        <ul>
                            <li><b>{currentDay.feels_like.day}</b> <span>feel</span></li>
                            <li><b>{currentDay.humidity}</b> <span>humidity</span> </li>
                        </ul>
                        <ul>
                            <li><b>{currentDay.clouds}%</b> <span>cloudy</span> </li>
                            <li><b>{currentDay.speed}</b> <span>wind</span> </li>
                        </ul>
                    </div>
              </div>
          </div>
      )
}

CurrentWeather.propTypes = {
    currentDay: PropTypes.object,
    city: PropTypes.string
}

export default CurrentWeather