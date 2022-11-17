import React from 'react';

import { NavBar } from './navbar';

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
