import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDoctors } from '../actions/index';
import loader from '../assets/doctor.gif';
import '../styles/Doctors.scss';
import NavBar from './Navbar';

const Doctors = ({
  fetchAllDoctors, doctors, pending, error,
}) => {
  useEffect(() => {
    if (doctors.length === 0) {
      fetchAllDoctors();
    }
  }, []);

  return (
    <div className="main-content">
      <NavBar />
      <div className="container">
        {pending && <img className="center" src={loader} alt="loader" />}
        {!pending && error && <h3>{error}</h3>}
        {!pending && !error && doctors.map(doctor => (
          <Link to={`doctor/${doctor.id}`} key={doctor.id}>
            <div className="more-info">
              <p className="single-doctor-title">{doctor.name}</p>
              <p className="single-doctor-title">{doctor.about}</p>
              <p className="single-doctor-title">{doctor.specialization}</p>
              <p className="single-doctor-title">{doctor.location}</p>
              <p className="single-doctor-title">{doctor.fees}</p>
              <p className="single-doctor-title">{doctor.email}</p>
              <img src={doctor.photo} alt="doctor" />
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

const mapDispatchToProps = dispatch => (
  {
    fetchAllDoctors: () => dispatch(fetchDoctors()),
  }

);

const mapStateToProps = state => ({
  doctors: state.doctorsReducer.doctors,
  pending: state.doctorsReducer.pending,
  error: state.doctorsReducer.error,
});

Doctors.propTypes = {
  fetchAllDoctors: PropTypes.func.isRequired,
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
  pending: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

Doctors.defaultProps = {
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
