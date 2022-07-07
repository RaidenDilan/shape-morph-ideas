import React from 'react';
import { render } from '@testing-library/react';

import { Spinner } from '../../src/components/Spinner';
import { SpinnerProps } from '../../src/components/Spinner/Spinner';

describe(__filename, () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render without custom class', () => {
    const props: SpinnerProps = { customClass: '' };
    const { getByTestId } = render(<Spinner {...props} />);
    const spinner = getByTestId('spinner');
    expect(spinner).toHaveClass('Spinner');
  });

  it('should render with custom class', () => {
    const newProps = { customClass: 'custom-class' };
    const { getByTestId } = render(<Spinner {...newProps} />);
    const spinner = getByTestId('spinner');
    expect(spinner).toHaveClass('Spinner custom-class');
  });
});
