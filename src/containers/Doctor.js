/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import loader from '../assets/doctor.gif';
import { createAppointment } from '../actions/index';
import validDate from '../utils/validDate';
// import { getUserIdFromToken } from '../utils/token';
import addDays from '../utils/addDays';
import NavBar from '../components/Navbar';
import '../styles/Doctor.scss';

const minDate = addDays(new Date(), 1).toISOString().slice(0, 10);

export const Doctor = ({ doctors, pending, createAnAppointment }) => {
  const allCities = ['Lagos', 'Abuja', 'Delta', 'Rivers'];
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState();
  const [appointmentForm, updateAppointmentForm] = useState({
    date: '',
    city: '',
  });
  const [notification, setNotification] = useState({ type: '', message: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    updateAppointmentForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newAppointment = {
      ...appointmentForm,
      doctor_id: doctor.id,
      doctor_name: doctor.name,
    };
    const { city, date } = newAppointment;

    if (city && date && validDate(date)) {
      createAnAppointment(newAppointment);
      setNotification({ type: 'success', message: 'Form submitted sucessfully' });
      updateAppointmentForm({ date: '', city: '' });
    } else {
      setNotification({ type: 'error', message: 'Please fill in all details.' });
    }
  };
  useEffect(() => {
    if (doctorId) {
      const matchedDoctor = doctors.find(doctor => doctor.id === +doctorId);
      setDoctor(matchedDoctor);
    }
  }, [doctors]);

  return (
    <div className="main-content">
      <div>
        <div>
          {pending && <img src={loader} className="center" alt="loader" />}
          {notification.message
            && (
            <span className={`notification ${notification.type}`}>
              {notification.message}
            </span>
            )}
          {doctor && (
            <div className="single-doctor-container">
              <div className="doctor-image">
                <img src={doctor.photo} alt={doctor.name} />
              </div>
              <div className="more-details">
                <div className="text-right my-1 text-upper">
                  <p>
                    <span className="title">DR.</span>
                    {' '}
                    {doctor.name}
                  </p>
                </div>
                <div className="d-flex justify-space-btw">
                  <p>Fees</p>
                  <p>{doctor.fees}</p>
                </div>

                <div className="d-flex justify-space-btw">
                  <p>Duration</p>
                  <p>1 Hour</p>
                </div>
                <div className="d-flex justify-space-btw">
                  <p>Time Available</p>
                  <p>2pm</p>
                </div>
                <form onSubmit={handleSubmit} className="d-flex flex-cl">
                  <label htmlFor="date">
                    Date
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={minDate}
                      value={appointmentForm.date}
                      onChange={handleChange}
                    />
                  </label>

                  <label htmlFor="cities">
                    City
                    <select
                      name="city"
                      id="city"
                      onChange={handleChange}
                      value={appointmentForm.city}
                    >
                      <option value="">Please select a city</option>
                      {allCities.map(city => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  doctors: state.doctorsReducer.doctors,
  pending: state.doctorsReducer.pending,
});

const mapDispatchToProps = dispatch => ({
  createAnAppointment: details => dispatch(createAppointment(details)),
});

Doctor.propTypes = {
  doctors: PropTypes.instanceOf(Array).isRequired,
  pending: PropTypes.bool.isRequired,
  createAnAppointment: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
