import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
import Planilla from './components/planilla/Planilla'
import PlanillaMaestra from './components/planilla/PlanillaMaestra'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <div>
    
      <React.StrictMode>
    <App  />
  </React.StrictMode>

  </div>
,
  document.getElementById('root')
);

reportWebVitals();
