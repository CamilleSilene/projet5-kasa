import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import Locations from './pages/Locations'
import Header from './components/Header'
import Error from './components/Error'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
      <Route path= "/" element={<Accueil/>} />    
    <Route path= "/apropos" element={<Apropos/>} />
    <Route path= "*" element={<Error/>} />
    <Route path= "/fichelogement" element={<Locations/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


