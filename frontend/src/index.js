import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage'
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      </Route>
      <Route path='/landingpage' element={<LandingPage/>}>
      </Route>
      <Route path='/mainpage' element={<MainPage/>}>
      </Route>
      <Route path='/login' element={<Login/>}>
      </Route>
    </Routes>    
    </BrowserRouter>
  </React.StrictMode>
);

