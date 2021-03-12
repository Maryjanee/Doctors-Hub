import { GET_DOCTORS_SUCCESS, GET_DOCTORS_PENDING, GET_DOCTORS_ERROR } from '../types';

const initialState = {
  pending: false,
  doctors: [],
  error: null,
};

const doctorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCTORS_PENDING:
      return { ...state, pending: true };
    case GET_DOCTORS_SUCCESS:
      return {
        ...state, pending: false, doctors: action.payload, error: '',
      };
    case GET_DOCTORS_ERROR:
      return {
        ...state, pending: false, doctors: [], error: action.payload,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
