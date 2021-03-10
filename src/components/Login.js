/* eslint-disable react/no-this-in-sfc */
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth-service';

const INITIAL_LOGIN_FORM = {
  email: '',
  password: '',
};

const Login = () => {
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
      if (response.error) {
        console.error(response.error);
      } else {
        console.log(response);
        localStorage.setItem('auth-token', response.token);
        history.push('/users');
      }
    }
  };

  return (
    <div>
      <p>Login Page</p>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/login">Login</Link>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" value={loginForm.email} onChange={handleChange} />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" value={loginForm.password} onChange={handleChange} />
        </label>

        <input type="submit" value="Login" />
      </form>

    </div>
  );
};
export default Login;
