import React from 'react';
import Forecast from './Forecast'
import testData from '../../testData'
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme'

describe('Forecast component', () => {
  let wrapper;
  const firstDayData = testData.list[0]
  const main = firstDayData.temp.day;
  const description = firstDayData.weather;
  const date = firstDayData.dt;
  
  beforeEach(() => {
    wrapper = mount(
      <Forecast main={main} description={description} date={date}/>
    );
  })

  afterEach(cleanup)

  test('it renders correctly', () => {  
      expect(wrapper).toMatchSnapshot();
  });

})

