import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorBoundary from '../../src/components/ErrorBoundary';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../src/components/ErrorBoundary/ErrorBoundary';

const Child = () => {
  throw new Error('Test');
};

const props: ErrorBoundaryProps & ErrorBoundaryState = {
  children: <div>Child</div>,
  error: undefined,
  hasError: false,
};

describe(__filename, () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    const { asFragment } = render(<ErrorBoundary {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it(`should render error boundary component when there is an error`, async () => {
    const log = jest.spyOn(console, 'log').mockImplementation();
    const error = jest.spyOn(console, 'error').mockImplementation(() => {
      throw new Error('Test');
    });

    const { getByText } = renderProviders(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>,
    );

    expect(screen.getByTestId('errorboundary-message')).toBeVisible();

    const errorMessage = getByText('An error occurred');
    expect(errorMessage).toBeDefined();

    expect(Child).toThrowError();

    expect(log).toHaveBeenCalledTimes(1);
    expect(error).toHaveBeenCalledTimes(3);
  });
});

const renderProviders = (ui: ReactElement) => render(ui, {});
