import React from 'react';
import Spinner from './Spinner'
import { shallow } from 'enzyme'
import { cleanup } from '@testing-library/react';

describe('Spinner component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<Spinner />
		)
	});

	afterEach(cleanup);

	test('it renders correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
})

