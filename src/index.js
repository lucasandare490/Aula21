import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Estilos globais
import App from './App'; // Componente principal da aplicação
import reportWebVitals from './reportWebVitals';

// Renderizando o componente App dentro do <div id="root"></div> no index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Para medir o desempenho
reportWebVitals();
