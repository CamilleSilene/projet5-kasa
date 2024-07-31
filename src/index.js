import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './pages/Accueil/Accueil';
import Apropos from './pages/Apropos/Apropos'
import Locations from './pages/Locations/Locations'
import Error from './components/Error/Error'
import Layout from './components/Agencement/Layout'
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { element: <Layout />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "*",
        element: <Error />,
      }   
    ]
   }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


