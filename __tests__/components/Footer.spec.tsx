import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../../src/components/Footer';

describe(__filename, () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with Footer as className', () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId('footer');
    expect(footer).toHaveClass('Footer');
  });
});
