import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Certifique-se de que o CSS está sendo importado
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'; // Ajuste o caminho conforme necessário

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
