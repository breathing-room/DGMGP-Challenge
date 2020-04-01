import React from 'react';
import Search from './Search';
import sinon from 'sinon';
import { getByTestId } from '@testing-library/dom'

import { mount, shallow } from 'enzyme';

describe('Search component', () => {
    let wrapper;
    const handleLocationSearch = jest.fn();
    const spy = sinon.spy()
    beforeEach(() => {
        wrapper = mount(<Search handleLocationSearch={handleLocationSearch} onButtonClick={spy}/>)
    })

    test('it renders correctly' , () => {
        const shallowWrap = shallow(
            <Search handleLocationSearch={handleLocationSearch}/>
        );
        expect(shallowWrap).toMatchSnapshot();

    })

    test('it renders a search bar', () => {
        expect(wrapper.find('#search-input'));
    })

    test('it renders a search button', () => {
       
        expect(wrapper.find('#search-btn'));
    })

    test('calls a function on search button click', () => {
        getByTestId('search-btn')
        .simulate('click');
        

        expect(spy.calledOnce).toBe(true);

        
    //     const onButtonClickMock = jest.fn();
    //     const wrapper = shallow(
    //         <button
    //         onButtonClick={onButtonClickMock}
    //         />,
    //         );
    //     const button = wrapper.find('button');
    //     button.simulate('click');
      
    //   expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    //   expect(onButtonClickMock).toHaveBeenCalledWith(true);
    });

    // test('passes a search query to a submit function on button click', () => {
    //     const query = wrapper.find('input').props().value;

    // })

})
