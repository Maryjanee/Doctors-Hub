import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import { fetchDoctors } from '../actions/index';
import loader from '../assets/doctor.gif';
import '../styles/Doctors.scss';
import NavBar from '../components/Navbar';
import dotted from '../assets/dotted.svg';
import twitterLogo from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import faceBook from '../assets/facebook.svg';

import 'react-multi-carousel/lib/styles.css';

const Doctors = ({
  fetchAllDoctors, doctors, pending, error,
}) => {
  useEffect(() => {
    if (doctors.length === 0) {
      fetchAllDoctors();
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 764, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-content">
      <NavBar />
      <div className="container">
        <h2 className="text-center">All Doctors</h2>
        <p className="text-center">Please Pick A Doctor </p>
        {pending && <img className="center" src={loader} alt="loader" />}
        {!pending && error && <h3>{error}</h3>}
        <Carousel className="mx-auto carousel-cont" responsive={responsive}>
          {!pending && !error && doctors.map(doctor => (
            <Link to={`doctor/${doctor.id}`} key={doctor.id}>
              <div className="more-info">
                <div className="image-circle">
                  <img className="doctor-img" src={doctor.photo} alt="doctor" />
                </div>
                <div>
                  <p className="text-center text-upper">{doctor.name}</p>
                  <div className="dotted">
                    <img src={dotted} alt="dotted-line" />
                  </div>
                  <p className="text-center">{doctor.specialization}</p>
                </div>
                <div className="social-links-container d-flex align-center justify-center">
                  <div className="logo-circle align-center justify-center">
                    <img src={faceBook} alt="facebook" />
                  </div>
                  <div className="logo-circle">
                    <img src={twitterLogo} alt="twitter" />
                  </div>
                  <div className="logo-circle">
                    <img src={instagram} alt="instagram" />
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </Carousel>

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
