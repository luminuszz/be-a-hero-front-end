/* eslint-disable import/no-unresolved */
import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import { GlobalStyle } from './styles/Globalstyles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={5000} />
    </>
  );
}
