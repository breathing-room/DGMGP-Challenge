import React from 'react';
import Tagline from './Tagline'

import { shallow } from 'enzyme';

describe('Tagline component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Tagline location='New Orleans'/>)
    })

    test('renders h2 element', () => {
        expect(wrapper.find('h2').text()).toBe(`The week's weather for New Orleans`)
    })
})
