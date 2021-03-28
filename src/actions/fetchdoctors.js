/* eslint-disable import/prefer-default-export */
import {
  GET_DOCTORS_PENDING, GET_DOCTORS_SUCCESS, GET_DOCTORS_ERROR,
} from '../types';
import DoctorsService from '../services/doctors-service';

export const getDoctorPending = () => ({
  type: GET_DOCTORS_PENDING,
});

export const getDoctorsSuccess = alldoctors => ({
  type: GET_DOCTORS_SUCCESS,
  payload: alldoctors,
});

export const getDoctorsError = error => ({
  type: GET_DOCTORS_ERROR,
  payload: error,
});

export const fetchDoctors = () => async dispatch => {
  dispatch(getDoctorPending());
  try {
    const doctors = await DoctorsService.getDoctors();
    dispatch(getDoctorsSuccess(doctors));
  } catch (error) {
    const errorMsg = error.error;
    dispatch(getDoctorsError(errorMsg));
  }
};
