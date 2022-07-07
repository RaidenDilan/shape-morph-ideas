import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../src/components/Header';

describe(__filename, () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with Header as className', () => {
    const { getByTestId } = render(<Header />);
    const spinner = getByTestId('header');
    expect(spinner).toHaveClass('Header');
  });
});
