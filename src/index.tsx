import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router/routes.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);