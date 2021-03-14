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
import NavBar from './Navbar';

const minDate = addDays(new Date(), 1).toISOString().slice(0, 10);

const Doctor = ({ doctors, pending, createAnAppointment }) => {
  const allCities = ['Lagos', 'Abuja', 'Delta', 'Rivers'];
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState();
  const [appointmentForm, updateAppointmentForm] = useState({
    date: '',
    city: '',
  });

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

    if (city && date) {
      console.log(newAppointment);
      if (validDate(date)) {
        createAnAppointment(newAppointment);
      } else {
        console.log('An error with your date');
      }
    }

    updateAppointmentForm({ date: '', city: '' });
  };
  useEffect(() => {
    if (doctorId) {
      const matchedDoctor = doctors.find(doctor => doctor.id === +doctorId);
      setDoctor(matchedDoctor);
    }
  }, [doctors]);

  return (
    <div className="main-content">
      <NavBar />

      <div>
        <div>
          {pending && <img src={loader} className="center" alt="loader" />}
          {doctor && (
            <>
              <div className="single-details d-grid">
                <div className="more-info">
                  <p className="single-doctor-title">{doctor.name}</p>
                  <p className="single-doctor-title">{doctor.about}</p>
                  <p className="single-doctor-title">{doctor.specialization}</p>
                  <p className="single-doctor-title">{doctor.location}</p>
                  <p className="single-doctor-title">{doctor.fees}</p>
                  <p className="single-doctor-title">{doctor.email}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <label htmlFor="date">
                  Date:
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={minDate}
                    value={appointmentForm.date}
                    onChange={handleChange}
                  />
                </label>

                <label htmlFor="booksCategory">
                  Select a city
                  <select
                    name="city"
                    id="city"
                    onChange={handleChange}
                    value={appointmentForm.city}
                  >
                    <option value="All">All</option>
                    {allCities.map(city => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </label>

                <input type="submit" value="Submit" />
              </form>
            </>
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
