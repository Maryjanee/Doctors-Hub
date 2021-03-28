import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import checkTokenExpiration from './middleware/tokenExpiration';
import rootReducer from './reducers/index';

const Store = createStore(
  rootReducer,
  applyMiddleware(thunk, checkTokenExpiration),
);

export default Store;
