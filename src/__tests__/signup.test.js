import renderer from 'react-test-renderer';
import Signup from '../components/Signup';
import { renderComponent } from '../helper';

describe('Login Page', () => {
  it('deep snapshot renders correctly', () => {
    const component = renderComponent(Signup);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
