import AppointmentService from '../services/appointments_service';
import DoctorsService from '../services/doctors-service';
import {
  GETDOCTORSPENDING, GETDOCTORSSUCCESS, GETDOCTORSERROR,
  GETUSERAPPONTMENTPENDING, GETUSERAPPOINTMENTSUCCESS,
  GETUSERAPPOINTMENTERROR,
} from '../types';

export const getDoctorPending = () => ({
  type: GETDOCTORSPENDING,
});

export const getDoctorsSuccess = alldoctors => ({
  type: GETDOCTORSSUCCESS,
  payload: alldoctors,
});

export const getDoctorsError = error => ({
  type: GETDOCTORSERROR,
  payload: error,
});

export const getUserAppointmentsPending = () => ({
  type: GETUSERAPPONTMENTPENDING,
});

export const getUserAppointmentSuccess = appointments => ({
  type: GETUSERAPPOINTMENTSUCCESS,
  payload: appointments,
});

export const getUserAppointmentError = error => ({
  type: GETUSERAPPOINTMENTERROR,
  payload: error,
});

export const fetchDoctors = () => async dispatch => {
  dispatch(getDoctorPending);
  try {
    const { data: doctors } = await DoctorsService.getDoctors();
    dispatch(getDoctorsSuccess(doctors));
  } catch (error) {
    const errorMsg = error.error;
    dispatch(getDoctorsError(errorMsg));
  }
};

export const fetchAppointments = () => async dispatch => {
  dispatch(getUserAppointmentsPending);
  try {
    const { data: appointments } = await AppointmentService.getAppointment();
    dispatch(getUserAppointmentSuccess(appointments));
  } catch (error) {
    const errorMsg = error.error;
    dispatch(getUserAppointmentError(errorMsg));
  }
};
