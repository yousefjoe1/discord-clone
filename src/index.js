import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// import '../node_modules/react-bootstrap/dist/react-bootstrap'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  ,
  document.getElementById('root')
);

