import React from 'react';
import CurrentWeather from './CurrentWeather'
import testData from '../../testData'

const firstDayData = testData.list[0]

import { mount, shallow } from 'enzyme'

describe('CurrentWeather component', () => {

  test('it renders correctly', () => {
      const currentDay = firstDayData;
      const city = 'New Orleans';
      const wrapper = shallow(
        <CurrentWeather currentDay={currentDay} city={city}/>
      );
    
      expect(wrapper).toMatchSnapshot();
  });
})

