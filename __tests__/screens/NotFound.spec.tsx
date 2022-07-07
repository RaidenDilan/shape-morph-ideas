import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../../src/screens/NotFound';

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
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the correct text', () => {
    const wrapper = render(<NotFound />);
    expect(wrapper.getByText('404')).toBeInTheDocument();
  });
});
