import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Certifique-se de que o CSS está sendo importado
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();