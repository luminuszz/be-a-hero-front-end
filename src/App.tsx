/* eslint-disable import/no-unresolved */
import React from 'react';

import Logon from './pages/Logon';
import Routes from './routes';
import { GlobalStyle } from './styles/Globalstyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}
