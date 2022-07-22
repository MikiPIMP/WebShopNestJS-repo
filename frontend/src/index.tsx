import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';


const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Contact", "/contact/"),
  new MainMenuItem("About us", "/page/about-us"),
  new MainMenuItem("Log In", "/user/login/")
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainMenu items = { menuItems }></MainMenu>
    <App />
  </React.StrictMode>
);

reportWebVitals();


//------------------------------------
//Milan: [06.07.2022. u 20h]
//Radi na localhostu, port 8000
//Pokrece se: yarn start (moze i sa: npm start)
//------------------------------------
/*
Dodati naknadno u node_module:
bootstrap, 
react-bootstrap, 
jquery, 
popper.js, 
@fortawesome/fontawesome-svg-core,
@fortawesome/free-solid-svg-icons,
@fortawesome/free-regular-svg-icons,
@fortawesome/react-fontawesome,
@fortawesome/react-fontawesome@latest,
@fortawesome/fontawesome-free,
*/
//Pogledati Bootstrap dokumentaciju
//https://fontawesome.com