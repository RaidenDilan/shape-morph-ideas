import { SpinnerType } from '../components/FullScreenSpinner/FullScreenSpinner';

export const API_BASE_URL =
  process.env.VITE_API_END_POINT || 'http://localhost:3010';

export const favicon = '/favicon.ico';
export const DOMAIN = process.env.REACT_APP_SITE;
export const getReactEnv = () => process.env.REACT_APP_ENV;
export const isProduction = () => getReactEnv() === 'prod';
export const isLocalhost = () =>
  window.location.href.indexOf('localhost') !== -1;
export const isStaging = () => getReactEnv() === 'staging';

export const DEFAULT_SPINNER_TYPE = SpinnerType.FullWidth;
