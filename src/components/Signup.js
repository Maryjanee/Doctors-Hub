import { Link, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth-service';
import '../styles/Signup.scss';

const Signup = () => {
  const history = useHistory();
  const [SignupError, setSignupError] = useState(null);
  const [signupForm, updateSignupForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    updateSignupForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log({ signupForm });
    const { username, email, password } = signupForm;
    if (username && email && password) {
      const response = await AuthService.signUp(signupForm);
      console.log(response);
      if (response && !response.error) {
        history.push('/');
      }
      if (!response || response.error) {
        setSignupError('An Error Occurred. Please try again');
      }
    }
  };

  if (localStorage.getItem('auth-token')) {
    return <Redirect to="/doctors" />;
  }

  return (
    <div className="main-bg">
      {SignupError && <div className="notification-bar">{SignupError}</div>}
      <div className="container">
        <h1 className="logo">Doctors Hub</h1>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              placeholder="Username"
            />

            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />

            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />

            <button type="submit" className="submit">
              Create an Account
            </button>
          </form>
          <p className="text-center small">
            Already a member?
            <Link to="/" className="create">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
};
export default Signup;
