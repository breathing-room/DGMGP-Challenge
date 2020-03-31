import React from 'react';
import Search from './Search'

import { mount, shallow } from 'enzyme';

describe('Search component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Search />)
    })

    test('renders a search bar', () => {
        expect(wrapper.find('#search-input'));
    })

    test('renders a search button', () => {
        expect(wrapper.find('#search-btn'));
    })

    test('calls a function on search buttom click', () => {
        
        const onButtonClickMock = jest.fn();
        const wrapper = shallow(
            <button
            onButtonClick={onButtonClickMock}
            />,
            );
        const button = wrapper.find('button');
        button.simulate('click');
      
      expect(onButtonClickMock).toHaveBeenCalledTimes(1);
      expect(onButtonClickMock).toHaveBeenCalledWith(true);
    });

    test('passes a search query to a submit function on button click', () => {
        const query = wrapper.find('input').props().value;

    })

    // test('intakes user search query', () => {
    //     console.log(wrapper.debug());
    //     const input = wrapper.find('input');
    //     input.simulate('change', { target: { value: 'foo' } });
    //     console.log(input.props())
    //     expect(input.props().value).toBe('foo');
    // })
})
