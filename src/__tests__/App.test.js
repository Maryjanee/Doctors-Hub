import App from '../components/App';
import { renderWithRedux } from './helper';

describe('App Component', () => {
  it('renders with redux and displays h1 text', () => {
    const { getByText } = renderWithRedux(<App />);
    expect(getByText('Doctors Hub')).toBeInTheDocument();
  });
});
