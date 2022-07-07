import React from 'react';
import { render } from '@testing-library/react';

import { FullScreenSpinner } from '../../src/components/FullScreenSpinner';
import {
  FullScreenSpinnerProps,
  SpinnerType,
} from '../../src/components/FullScreenSpinner/FullScreenSpinner';

describe(__filename, () => {
  const props: FullScreenSpinnerProps = {
    isLoading: false,
  };

  it('should render without crashing', () => {
    const { asFragment } = render(<FullScreenSpinner {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with classNames when spinnerType is FullScreen', () => {
    const newProps: FullScreenSpinnerProps = {
      ...props,
      spinnerType: SpinnerType.FullScreen,
    };
    const { getByTestId } = render(<FullScreenSpinner {...newProps} />);
    const spinner = getByTestId('full-screen-spinner');
    expect(spinner).toHaveClass('FullScreenSpinner FullScreen invisible');
  });

  it('should render with classNames when spinnerType is FullWidth', () => {
    const newProps: FullScreenSpinnerProps = {
      ...props,
      spinnerType: SpinnerType.FullWidth,
    };
    const { getByTestId } = render(<FullScreenSpinner {...newProps} />);
    const spinner = getByTestId('full-screen-spinner');
    expect(spinner).toHaveClass('FullScreenSpinner FullWidth invisible');
  });
});
