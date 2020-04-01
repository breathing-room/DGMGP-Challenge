import React from 'react';
import Search from './Search';
import sinon from 'sinon';
import { render, fireEvent } from "@testing-library/react";
import { cleanup } from '@testing-library/react';
import { mount } from 'enzyme';

describe('Search component', () => {  
	let wrapper;
	const spy = sinon.spy();

	beforeEach(() => {
		wrapper = mount(
			<Search handleLocationSearch={spy} onChange={spy}/>
		)
	})

		afterEach(cleanup)

		test('it renders correctly' , () => {
			expect(wrapper).toMatchSnapshot();
		})

		test('it renders a search bar', () => {
			expect(wrapper.find('.search-input'));
		})

		test('it renders a search button', () => {
			expect(wrapper.find('.search-btn'));
		})

		test('calls a function on search button click', () => {
			const { getByTestId } = render(<Search handleLocationSearch={spy}/>)
			const button = getByTestId('search-btn');
			fireEvent.click(button);
			expect(spy.calledOnce).toBe(true);
		});

		test('calls a function on input change', () => {
				const event = {
					target: { value: 'the-value' }
				};
				wrapper.find('input').simulate('change', event);
				expect(spy.calledOnce).toBe(true);
		})
})
