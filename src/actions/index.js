/* eslint-disable import/no-named-as-default */
import AppointmentService from '../services/appointments_service';
import DoctorsService from '../services/doctors-service';
import { getUserIdFromToken } from '../utils/token';
import {
  GET_DOCTORS_PENDING,
  GET_DOCTORS_SUCCESS,
  GET_DOCTORS_ERROR,
  GET_USER_APPOINTMENTS_PENDING,
  GET_USER_APPOINTMENTS_SUCCESS,
  GET_USER_APPOINTMENTS_ERROR,
  CREATE_USER_APPOINTMENT_SUCCESS,
  DELETE_USER_APPOINTMENT,
} from '../types';

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

export const getUserAppointmentsPending = () => ({
  type: GET_USER_APPOINTMENTS_PENDING,
});

export const getUserAppointmentsSuccess = appointments => ({
  type: GET_USER_APPOINTMENTS_SUCCESS,
  payload: appointments,
});

export const getUserAppointmentsError = error => ({
  type: GET_USER_APPOINTMENTS_ERROR,
  payload: error,
});

export const createUserAppointmentSuccess = userDetails => ({
  type: CREATE_USER_APPOINTMENT_SUCCESS,
  payload: userDetails,
});

export const createUserAppointmentError = error => ({
  type: CREATE_USER_APPOINTMENT_SUCCESS,
  payload: error,
});

export const deleteUserAppointment = id => ({
  type: DELETE_USER_APPOINTMENT,
  payload: id,
});

export const createAppointment = details => async dispatch => {
  try {
    const appointmentDetails = await AppointmentService.createAppointment(
      details,
    );
    dispatch(createUserAppointmentSuccess(appointmentDetails));
  } catch (error) {
    const errorMsg = error.error;
    dispatch(createUserAppointmentError(errorMsg));
  }
};

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

export const fetchAppointments = () => async dispatch => {
  dispatch(getUserAppointmentsPending());
  const userId = getUserIdFromToken();
  try {
    const appointments = await AppointmentService.getAppointment(userId);
    dispatch(getUserAppointmentsSuccess(appointments));
  } catch (error) {
    const errorMsg = error.error;
    dispatch(getUserAppointmentsError(errorMsg));
  }
};

export const deleteAppointment = id => async dispatch => {
  try {
    await AppointmentService.deleteAppointment(id);
    dispatch(deleteUserAppointment(id));
  } catch (error) {
    const errorMsg = error.error;
    dispatch(getUserAppointmentsError(errorMsg));
  }
};
