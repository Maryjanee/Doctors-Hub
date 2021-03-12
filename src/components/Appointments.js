// Make a call to the Api and retrieve user's appointments
// Store the result in the redux store
// use the reducers and actions to acheive the call and storing
// Retrieve localstorage to retrieve user info

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../actions/index';

const Appointment = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointmentsReducer.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);
  return (
    <div>
      <h1>All Appointments</h1>
      <div>
        {appointments && appointments.map(appointment => (

          <div className="more-info" key={appointment.id}>
            <p className="single-appointment-title">{appointment.doctor_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
