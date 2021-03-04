import { Link } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth-service';

const Signup = () => {
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
    }
  };

  return (
    <div>
      <p>Signup Page</p>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/login">Login</Link>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input type="text" id="username" name="username" onChange={handleChange} />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" onChange={handleChange} />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" onChange={handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};
export default Signup;
