import renderer from 'react-test-renderer';
import Login from '../components/Login';
import { renderComponent } from './helper';

describe('Login Page', () => {
  it('renders correctly', () => {
    const component = renderComponent(Login);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
