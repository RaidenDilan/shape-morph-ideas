import React from 'react';
import './Layout.scss';
import { LayoutProps } from './Layout';

const Layout = ({ children }: LayoutProps) => (
  <div className="Layout">
    <div className="Layout__body">{children}</div>
  </div>
);

export default Layout;
