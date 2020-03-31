import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import Header from './components/Header/Header';
import Tagline from './components/Tagline/Tagline';
import Weather from './components/Weather/Weather';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

import { mount } from 'enzyme'

describe('Main App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  })
  test('renders App component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  test('renders Header component', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  })

  test('renders Tagline component', () => {
    expect(wrapper.contains(<Tagline />)).toBe(true);
  })

  test('renders Weather component', () => {
    expect(wrapper.contains(<Weather />)).toBe(true);
  })

  test('renders Search component', () => {
    expect(wrapper.contains(<Search />)).toBe(true);
  })

  test('renders Footer component', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  })
})

