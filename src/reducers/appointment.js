import {
  GET_USER_APPOINTMENTS_PENDING,
  GET_USER_APPOINTMENTS_SUCCESS,
  GET_USER_APPOINTMENTS_ERROR,
  CREATE_USER_APPOINTMENT_SUCCESS,
  DELETE_USER_APPOINTMENT,
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
    case GET_USER_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        appointments: action.payload,
        error: '',
      };
    case GET_USER_APPOINTMENTS_ERROR:
      return {
        ...state, pending: false, error: action.payload,
      };
    case CREATE_USER_APPOINTMENT_SUCCESS:
      return {
        ...state,
        pending: false,
        appointments: [...state.appointments, action.payload],
        error: '',
      };

    case DELETE_USER_APPOINTMENT:
      return {
        ...state,
        pending: false,
        appointments: state.appointments.filter(appointment => action.payload !== appointment.id),
      };

    default:
      return state;
  }
};

export default appointmentReducer;
