import React from 'react';
import { render } from '@testing-library/react';

import Main from '../../src/screens/Main';

jest.mock('React', () => ({
  ...jest.requireActual('React'),
  useEffect: jest.fn(),
}));

const navigate = jest.fn();

jest.mock('react-router-dom', () => {
  const requireActual = jest.requireActual('react-router-dom');
  return {
    ...requireActual,
    useNavigate: () => navigate,
  };
});

describe(__filename, () => {
  it('should render without crashing', () => {
    const wrapper = render(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
