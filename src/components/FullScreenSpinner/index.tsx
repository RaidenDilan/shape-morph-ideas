import React from 'react';
import { DEFAULT_SPINNER_TYPE } from '../../config';

import { Spinner } from '../Spinner';

import './FullScreenSpinner.scss';
import { FullScreenSpinnerProps } from './FullScreenSpinner';

export const FullScreenSpinner = ({
  spinnerType = DEFAULT_SPINNER_TYPE,
  isLoading,
}: FullScreenSpinnerProps) => {
  const classes = `
    FullScreenSpinner
    ${spinnerType}
    ${isLoading ? 'visible' : 'invisible'}
  `;

  return (
    <div
      data-testid="full-screen-spinner"
      id="fullScreenSpinner"
      className={classes}
    >
      <Spinner />
    </div>
  );
};
