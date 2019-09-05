import renderer from 'react-test-renderer';
import React from 'react';
import { Calendar } from '../../components/calendar';

it('renders correctly', () => {
  const cal = renderer.create(<Calendar />).toJSON();
  expect(cal).toMatchSnapshot();
});
