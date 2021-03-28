import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './Navbar';
import '../styles/ProtectedRoute.scss';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props => {
      if (localStorage.getItem('auth-token')) {
        return (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <>
            <div className="sidebar">
              <NavBar />
            </div>
            <div className="content">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Component {...rest} {...props} />
            </div>
          </>
        );
      }
      return <Redirect to="/" />;
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
