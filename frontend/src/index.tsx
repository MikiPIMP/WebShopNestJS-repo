import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';
import { Route, Routes} from 'react-router-dom';
import ContactPage from './components/ContactPage/ContactPage';
import UserLoginPage from './components/UserLoginPage/UserLoginPage';
import { BrowserRouter } from 'react-router-dom';


const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Contact", "/contact/"),
  new MainMenuItem("Log In", "/user/login/")
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainMenu items = { menuItems }></MainMenu>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
        <Route path='/user/login' element={ <UserLoginPage /> } />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();


//------------------------------------
//Milan: [06.07.2022. u 20h]
//Radi na localhostu, port 8000
//Pokrece se: yarn start (moze i sa: npm start)
//------------------------------------
/*
Dodati naknadno u node_module sa: yarn add:
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
react-router-dom,
@types/react-router-dom,
*/
//Pogledati Bootstrap dokumentaciju
//https://fontawesome.com