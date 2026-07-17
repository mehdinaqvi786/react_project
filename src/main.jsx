import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootStyle = {
  fontFamily: "'Montserrat', sans-serif",
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
};

document.body.style = `margin:0;font-family: 'Montserrat', sans-serif`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
