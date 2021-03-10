import {
  GET_USER_APPOINTMENTS_PENDING,
  GET_USER_APPOINTMENT_SUCCESS,
  GET_USERAPPOINTMENT_ERROR,
}
  from '../types';

const initialState = {
  pending: false,
  appointments: [],
  error: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_APPOINTMENTS_PENDING:
      return { ...state, pending: true };
    case GET_USER_APPOINTMENT_SUCCESS:
      return {
        ...state, pending: false, appointments: action.payload, error: '',
      };
    case GET_USERAPPOINTMENT_ERROR:
      return {
        ...state, pending: false, appointments: [], error: action.payload,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
