import React from 'react';
import Weather from './Weather'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import testData from '../../testData'

import { shallow } from 'enzyme';

describe('Weather component', () => {

	test('it renders correctly', () => {
		const city = 'New Orleans';
		const currentDay = testData.list[0];
		const forecast = testData.list.slice(1);
		const wrapper = shallow(
			<Weather city={city} currentDay={currentDay} forecast={forecast}/>
		);
		expect(wrapper).toMatchSnapshot();
	})
	
	test('renders CurrentWeather component', () => {
		// const { getByTestId } = render(<Weather/>)
		// const currentWeather = getByTestId('current-weather');
		// expect(currentWeather).toExist();
	})
})
