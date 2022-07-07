export type FullScreenSpinnerProps = {
  isLoading: boolean;
  spinnerType?: SpinnerType;
};

export enum SpinnerType {
  FullWidth = 'FullWidth',
  FullScreen = 'FullScreen',
}
