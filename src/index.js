import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MyProvider } from './Context/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MyProvider>
      <App />
    </MyProvider>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
