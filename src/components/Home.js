import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p>Home Page</p>
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </div>
);
export default Home;
