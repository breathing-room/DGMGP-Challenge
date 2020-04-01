import React from 'react';
import Header from './Header'
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';

describe('Header component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  afterEach(cleanup)

  test('it renders correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  test('it renders an h5 element', () => {
    expect(wrapper.find('h5').text()).toBe(`Don't get mad, get the weather. :)`)
  })
})
