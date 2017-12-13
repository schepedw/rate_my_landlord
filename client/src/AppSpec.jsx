import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import App from './App';

it('renders without crashing', () => {
  expect(shallowToJson(<App />)).toMatchSnapshot();
});
