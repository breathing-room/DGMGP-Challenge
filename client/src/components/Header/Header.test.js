import React from 'react';
import Header from './Header'

import { shallow } from 'enzyme';

describe('Header component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />)
    })

    test('renders h2 element', () => {
        expect(wrapper.find('h2').text()).toBe(`Don't Get Mad, Get the Weather`)
    })
})
