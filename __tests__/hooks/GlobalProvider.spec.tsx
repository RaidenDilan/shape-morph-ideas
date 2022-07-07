import React from 'react';
import { render } from '@testing-library/react';
import { GlobalProvider } from '../../src/hooks/GlobalContext';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  const requireActual = jest.requireActual('react-router-dom');
  return {
    ...requireActual,
    useNavigate: () => mockedUsedNavigate,
  };
});

describe(__filename, () => {
  it('renders the global provider', () => {
    const { asFragment } = render(
      <GlobalProvider children={<React.Fragment />} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
