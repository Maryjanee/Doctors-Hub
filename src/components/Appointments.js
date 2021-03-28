import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAppointment, fetchAppointments } from '../actions/index';
import { getUsernameFromToken } from '../utils/token';
import '../styles/Appointments.scss';

const Appointment = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(
    state => state.appointmentsReducer.appointments,
  );

  const deleteUserAppointment = id => {
    dispatch(deleteAppointment(id));
  };

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  return (
    <div className="appointments">
      <h2 className="text-center">All Appointments</h2>
      <h4 className="text-center">
        Hello
        {' '}
        {getUsernameFromToken()}
        {appointments.length === 0
          ? 'You have no appointments'
          : ', here are your appointments'}
      </h4>
      <div className="appointment-container">
        {appointments
          && appointments.map(appointment => (
            <div className="appointment" key={appointment.id}>
              <p>
                Doctor:
                {appointment.doctor_name}
              </p>
              <p>
                Appointment Date:
                {appointment.date}
              </p>
              <p>
                City:
                {appointment.city}
              </p>
              <button
                type="button"
                className="submit"
                onClick={() => deleteUserAppointment(appointment.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Appointment;
