import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
import Planilla from './components/planilla/Planilla'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Planilla  />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
