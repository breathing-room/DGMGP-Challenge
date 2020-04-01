import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import Spinner from '../Spinner/Spinner'
import Forecast from '../Forecast/Forecast'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import './Weather.css';

const Weather = ({ city, currentDay, forecast }) => {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);

	useEffect(() => {
		if (forecast) {
			setIsLoaded(true);
		}
	}, [])

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <Spinner />;
	} else {
		return (
			<div className='weather-container' data-testid='weather-component'> 
				{city ? 
				<div>
					<CurrentWeather data-testid='current-weather' currentDay={currentDay} city={city}/>
					<ul className='forecast-container'>
					{forecast.length ?
					forecast.map(singleDayForecast => {
						return (
							<li className='day'> 
								<Forecast  
									key={singleDayForecast.dt}
									date={singleDayForecast.dt} 
									main={singleDayForecast.temp.day} 
									description={singleDayForecast.weather}
									/>
							</li>
							)
						})
						: null }
					</ul>
				</div>
				: <Spinner />
				}
			</div>
		);
	}
}

Weather.propTypes = {
	city: PropTypes.string,
	currentDay: PropTypes.object,
	forecast: PropTypes.array,
}

export default Weather;