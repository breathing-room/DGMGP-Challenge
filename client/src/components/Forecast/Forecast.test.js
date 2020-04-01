import React from 'react';
import Forecast from './Forecast'
import testData from '../../testData'

const firstDayData = testData.list[0]

import { mount, shallow } from 'enzyme'

describe('Forecast component', () => {

  test('it renders correctly', () => {
      const main = firstDayData.temp.day;
      const description = firstDayData.weather;
      const date = firstDayData.dt
      const wrapper = shallow(
        <Forecast main={main} description={description} date={date}/>
      );
    
      expect(wrapper).toMatchSnapshot();
  });
})

