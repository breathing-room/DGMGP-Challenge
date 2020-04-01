import '@testing-library/jest-dom/extend-expect';

// Configure Enzyme to run with tests.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });