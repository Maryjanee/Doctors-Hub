import renderer from 'react-test-renderer';
import Appointment from '../components/Appointments';
import { renderComponent } from './helper';

describe('Appointment Page', () => {
  it('deep snapshot renders correctly', () => {
    const component = renderComponent(Appointment);
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
