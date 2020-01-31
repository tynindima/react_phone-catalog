import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const baseName = process.env.REACT_APP_BASENAME || 'react_phone-catalog';

ReactDOM.render(
  <BrowserRouter basename={baseName}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
