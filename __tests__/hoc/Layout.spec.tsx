import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';

import { GlobalCtx, defaultValues } from '../../src/hooks/GlobalContext';

const LayoutRoute = () => <React.Fragment />;
const ProtectedRoute = () => <React.Fragment />;

const navigate = jest.fn();

jest.mock('react-router-dom', () => {
  const requireActual = jest.requireActual('react-router-dom');
  return {
    ...requireActual,
    useNavigate: () => navigate,
  };
});

describe('Layout', () => {
  it('renders layout onboarding without token', () => {
    const { asFragment } = render(
      <GlobalCtx.Provider value={{ ...defaultValues }}>
        <LayoutRoute />
      </GlobalCtx.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();

    expect(navigate.mock.calls).toMatchSnapshot();
  });

  it('renders layout with isLoading', () => {
    expect(
      create(
        <GlobalCtx.Provider value={{ ...defaultValues, isLoading: true }}>
          <LayoutRoute />
        </GlobalCtx.Provider>,
      ),
    ).toMatchSnapshot();

    expect(navigate.mock.calls).toMatchSnapshot();
  });

  it('renders protected route without token', () => {
    expect(
      create(
        <GlobalCtx.Provider value={{ ...defaultValues }}>
          <ProtectedRoute />
        </GlobalCtx.Provider>,
      ),
    ).toMatchSnapshot();

    expect(navigate.mock.calls).toMatchSnapshot();
  });

  it('renders protected route with isLoading', () => {
    const { asFragment } = render(
      <GlobalCtx.Provider value={{ ...defaultValues, isLoading: true }}>
        <LayoutRoute />
      </GlobalCtx.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(navigate.mock.calls).toMatchSnapshot();
  });
});
