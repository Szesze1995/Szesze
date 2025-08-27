import React from 'react';
import './theme.css';

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <div className="theme-dark">{children}</div>;
};
