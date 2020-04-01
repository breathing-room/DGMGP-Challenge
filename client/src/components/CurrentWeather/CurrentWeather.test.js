import React from 'react';
import CurrentWeather from './CurrentWeather'
import testData from '../../testData'
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme'

const firstDayData = testData.list[0]


describe('CurrentWeather component', () => {
	let wrapper;
	const currentDay = firstDayData;
	const city = 'New Orleans';

	beforeEach(() => {
		wrapper = mount(
			<CurrentWeather currentDay={currentDay} city={city}/>
		)
	})

	afterEach(cleanup)

	test('it renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('it renders the temp, day, time, and some extra details', () => {
		expect(wrapper.find('h2').text()).toContain('° F')
		expect(wrapper.find('.current-day')).toBeTruthy();
		expect(wrapper.find('.current-time')).toBeTruthy();
		expect(wrapper.find('.extra-details')).toBeTruthy();
	})
})

