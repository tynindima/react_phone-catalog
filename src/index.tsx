import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

const baseName = process.env.REACT_APP_BASENAME || 'react_phone-catalog';

ReactDOM.render(
  <HashRouter basename={baseName}>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
