import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Login from './Login';
import SignUp from './Signup';
import Doctors from '../containers/Doctors';
import Doctor from '../containers/Doctor';
import { fetchDoctors } from '../actions/index';
import ProtectedRoute from './ProtectedRoute';
import Appointment from './Appointments';
import FourOhFour from './404';
import '../styles/App.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      dispatch(fetchDoctors());
    }
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute exact path="/doctors" component={Doctors} />
        <ProtectedRoute path="/doctor/:doctorId" component={Doctor} />
        <ProtectedRoute exact path="/appointments" component={Appointment} />
        <Route path="/*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
