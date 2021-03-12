import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props => {
      if (localStorage.getItem('auth-token')) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...rest} {...props} />;
      }
      return <Redirect to="/" />;
    }}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
