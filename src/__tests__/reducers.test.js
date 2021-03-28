import doctorsReducer from '../reducers/doctors';
import appointmentsReducer from '../reducers/appointment';
import { GET_DOCTORS_SUCCESS, GET_USER_APPOINTMENTS_SUCCESS } from '../types';

describe('Doctors Reducer', () => {
  it('should return the default state when there is no action match', () => {
    const newState = doctorsReducer(undefined, {});
    expect(newState).toEqual({
      pending: false,
      doctors: [],
      error: null,
    });
  });
  it('should update state when there is an action match', () => {
    const doctor = [{
      name: 'Anne Hathaway',
      location: 'Texas US',
      specialization: 'Public Health Opthalmology',
      fees: '30000',
      email: 'annehat@gmail.com',
      about: 'I am a Professor of Public Health Opthalmology with 38 years experience in the practice of medicine. The treatment and correction of all eyes related ailments is my specialty. My services include Medical, Surgical and Optical.',
      photo: 'https://www.pinnaclecare.com/wp-content/uploads/2017/12/bigstock-African-young-doctor-portrait-28825394.jpg',

    }];

    const initialState = {
      pending: false,
      doctors: [],
      error: null,
    };
    const newState = doctorsReducer(initialState,
      {
        type: GET_DOCTORS_SUCCESS,
        payload: doctor,
      });

    expect(newState).toEqual({
      pending: false,
      doctors: [...doctor],
      error: '',
    });
  });
});

describe('Appointments Reducer', () => {
  it('should update state with new Appointments when there is an action match', () => {
    const appointment = [{
      date: '2021-03-24',
      city: 'Lagos',
      doctor_name: 'Anne Hathaway',
    }];

    const initialState = {
      pending: false,
      appointments: [],
      error: null,
    };
    const newState = appointmentsReducer(initialState,
      {
        type: GET_USER_APPOINTMENTS_SUCCESS,
        payload: appointment,
      });

    expect(newState).toEqual({
      pending: false,
      appointments: [...appointment],
      error: '',
    });
  });
});
