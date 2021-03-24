import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../Store';

it('renders Login page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
