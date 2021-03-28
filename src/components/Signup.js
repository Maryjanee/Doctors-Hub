import { Link, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth-service';
import '../styles/Signup.scss';

const Signup = () => {
  const history = useHistory();
  const [signupError, setSignupError] = useState(null);
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
    const { username, email, password } = signupForm;
    if (username && email && password) {
      const response = await AuthService.signUp(signupForm);
      if (response && !response.error) {
        history.push('/');
      }
      if (!response || response.error) {
        setSignupError('An error occurred. Please try again');
      }
    } else {
      setSignupError('All fields are required');
    }
  };

  if (localStorage.getItem('auth-token')) {
    return <Redirect to="/doctors" />;
  }

  return (
    <div className="main-bg">
      {signupError && <div className="notification error">{signupError}</div>}
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
