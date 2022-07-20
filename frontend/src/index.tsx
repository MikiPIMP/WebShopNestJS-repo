import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


//------------------------------------
//Milan: [06.07.2022. u 20h]
//Radi na localhostu, port 8000
//Pokrece se: yarn start (moze i sa: npm start)
//------------------------------------
