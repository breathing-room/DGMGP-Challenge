import React from 'react';
import Header from './Header'

import { shallow } from 'enzyme';

describe('Header component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />)
    })

    test('it renders correctly', () => {   
      expect(wrapper).toMatchSnapshot();
    });

    test(' itrenders h5 element', () => {
        expect(wrapper.find('h5').text()).toBe(`Don't get mad, get the weather.`)
    })
})
