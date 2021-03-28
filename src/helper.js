/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-body-style */
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

export const renderComponent = (Component, props = {}) => {
  return (
    <BrowserRouter>
      <Component {...props} />
    </BrowserRouter>
  );
};

export const renderWithRedux = (component,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = {}) => ({
  ...render(
    <Provider store={store}>
      renderComponent(component)
    </Provider>,
  ),
});
