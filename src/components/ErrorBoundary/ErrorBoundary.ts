import React, { ReactNode } from 'react';

export type ErrorBoundaryProps = {
  children: ReactNode;
};

export type ErrorBoundaryState = {
  error?: string;
  hasError: boolean;
};

export type ErrorBoundaryCopy = {
  errorBoundary: {
    message: string;
    reload: string;
  };
};
