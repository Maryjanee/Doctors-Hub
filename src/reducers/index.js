import { combineReducers } from 'redux';
import doctorReducer from './doctors';
import appointmentsReducer from './appointment';

const rootReducer = combineReducers({
  doctorReducer,
  appointmentsReducer,

});

export default rootReducer;
