import renderer from 'react-test-renderer';
import Home from '../components/Home';
import { renderComponent } from '../helper';

describe('Home Page', () => {
  it('deep snapshot renders correctly', () => {
    const component = renderComponent(Home);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
