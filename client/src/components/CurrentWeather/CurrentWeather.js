import React from 'react';
import './CurrentWeather.css'

const CurrentWeather = ({ currentDay, city }) => {
    console.log(currentDay)
      // Retrieve weather icon from Open Weather Map API
      const iconUrl = `https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`
      return (
          <div className='current-container'> 
              <div className='current-main-content'>
                <h2>{city}</h2>
                  <div className='current-weather-icon'>
                      <img src={iconUrl} alt='Weather Icon'/>
                  </div>
                  <h2>
                        {currentDay.temp.day}° F
                  </h2>
              </div>
              <div className='current-description-container'> 
                    <h3 className='description'>{currentDay.weather[0].description}</h3>
                    <div className='extra-details'>
                        <ul>
                            <li>Feels like <b>{currentDay.feels_like.day}</b></li>
                            <li>Humidity <b>{currentDay.humidity}</b></li>
                        </ul>
                        <ul>
                            <li>Rain <b>{currentDay.rain}mm</b></li>
                            <li>Pressure <b>{currentDay.pressure}</b></li>
                        </ul>
                    </div>
              </div>
          </div>
      )
}

export default CurrentWeather