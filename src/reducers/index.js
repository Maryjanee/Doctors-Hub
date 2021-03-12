import { combineReducers } from 'redux';
import doctorsReducer from './doctors';
import appointmentsReducer from './appointment';

const rootReducer = combineReducers({
  doctorsReducer,
  appointmentsReducer,
});

export default rootReducer;
