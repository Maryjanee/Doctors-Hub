import { Link, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth-service';

const Signup = () => {
  const history = useHistory();
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
        history.push('/login');
      }
    }
  };

  if (localStorage.getItem('auth-token')) {
    return <Redirect to="/doctors" />;
  }

  return (
    <div className="container">

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" id="username" name="username" onChange={handleChange} />
          :
          <input type="email" id="email" name="email" onChange={handleChange} />

          <input type="password" id="password" name="password" onChange={handleChange} />

          <button type="submit" className="submit">Create an Account</button>
        </form>
        <p>
          Already a member?
          <Link to="/" className="create">Log In</Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
