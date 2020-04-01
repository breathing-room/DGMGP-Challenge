import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react-test-renderer';
import Weather from './Weather'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import testData from '../../testData'



import { mount, shallow } from 'enzyme';

describe('Weather component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Weather />)
    })

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
        // const { getByTestId, getAllByTestId } = render(<Weather />);
        // const weatherComponent = getByTestId('weather-component')
        // const currentWeatherComponent = within(wrapper).getAllByTestId('current-weather')
        // expect(currentWeatherComponent.length).toBe(1);

    })
})
