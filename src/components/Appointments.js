import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../actions/index';
import NavBar from './Navbar';
import '../styles/Appointments.scss';

const Appointment = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(
    state => state.appointmentsReducer.appointments,
  );

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);
  return (
    <div className="main-content">
      <NavBar />
      <div className="border-test">
        <h3 className="text-center">All Appointments</h3>
        <div className="appointment-container">
          {appointments
            && appointments.map(appointment => (
              <div className="appointment" key={appointment.id}>
                <p>
                  Doctor:
                  {' '}
                  {appointment.doctor_name}
                </p>
                <p>
                  Appointment Date:
                  {' '}
                  {appointment.date}
                </p>
                <p>
                  City:
                  {' '}
                  {appointment.city}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
