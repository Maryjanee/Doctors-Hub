import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments } from '../actions/index';
import NavBar from '../containers/Navbar';

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
      <div>
        <h1>All Appointments</h1>
        <div>
          {appointments
            && appointments.map(appointment => (
              <div className="more-info" key={appointment.id}>
                <p className="single-appointment-title">
                  {appointment.doctor_name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
