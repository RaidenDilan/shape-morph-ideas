declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.scss';
declare module '*.json';
declare module '*.ts';
declare module '*.ttf';
declare module '*.jpg';
declare module '*.webp';

interface ReadonlyArray<T> {
  includes(searchElement: any, fromIndex?: number): searchElement is T;
}
