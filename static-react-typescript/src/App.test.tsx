import * as React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('./components/ConfigContext');

it('renders without crashing', () => {
  render(<App />);
});
