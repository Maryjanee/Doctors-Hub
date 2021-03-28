import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Appointment from '../components/Appointments';
import store from '../Store';

it('Appointments', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Appointment />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
