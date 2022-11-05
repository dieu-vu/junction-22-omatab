import React from 'react';
import ReactDOM from 'react-dom/client';
import './layout/style.css';
import App from './layout/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);


