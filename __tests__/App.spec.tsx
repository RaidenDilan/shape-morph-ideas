import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import { config } from 'react-transition-group';

config.disabled = true;

import App from '../src/App';

jest.mock('React', () => ({
  ...jest.requireActual('React'),
  useEffect: jest.fn(),
}));

describe('render the app', () => {
  it('should render without crashing', async () => {
    await act(async () => {
      const { asFragment } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
