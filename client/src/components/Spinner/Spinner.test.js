import React from 'react';
import Spinner from './Spinner'

import { shallow } from 'enzyme'

describe('Spinner component', () => {

  test('it renders correctly', () => {
      const wrapper = shallow(
        <Spinner />
      );
    
      expect(wrapper).toMatchSnapshot();
  });
})

