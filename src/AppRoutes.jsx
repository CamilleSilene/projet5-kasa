import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Apropos from './pages/Apropos/Apropos';
import Logement from './pages/Logement/Logement';
import Error from './components/Error/Error';
import Layout from './components/Agencement/Layout';
import './SASS/index.scss';


function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Accueil/>} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} errorElement={<Error />}/>
        <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes