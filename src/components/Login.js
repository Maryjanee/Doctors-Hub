/* eslint-disable react/no-this-in-sfc */
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth-service';
import '../styles/Login.scss';

const INITIAL_LOGIN_FORM = {
  email: '',
  password: '',
};

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const [loginForm, updateLoginForm] = useState(INITIAL_LOGIN_FORM);
  const history = useHistory();

  const handleChange = event => {
    const { name, value } = event.target;
    updateLoginForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = loginForm;
    updateLoginForm(INITIAL_LOGIN_FORM);
    if (email && password) {
      const response = await AuthService.login({ email, password });
      if (response && response.token) {
        localStorage.setItem('auth-token', response.token);
        setLoginError(null);
        history.push('/doctors');
      }
      if (!response || response.error) {
        setLoginError('Login failed. Please try again');
      }
    }
  };

  if (localStorage.getItem('auth-token')) {
    return <Redirect to="/doctors" />;
  }

  return (
    <div className="main-bg">
      <div className="container">
        <h1 className="logo">Doctors Hub</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="d-flex flex-cl">

            <input type="email" id="email" placeholder="Email" name="email" value={loginForm.email} onChange={handleChange} />

            <input type="password" id="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleChange} />

            <input type="submit" value="Login" className="submit" />
          </form>

          <p className="text-center">
            Not Registered?
            <Link to="/signup" className="create">Create an Account</Link>
          </p>
          {loginError && <div>{loginError}</div>}
        </div>
      </div>
    </div>

  );
};
export default Login;
