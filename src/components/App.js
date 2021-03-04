import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './Signup';

const App = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </>
  </BrowserRouter>
);

export default App;
