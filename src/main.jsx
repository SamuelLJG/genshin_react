import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chiori from './pages/Chiori';
import Baizhu from './pages/Baizhu';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import ErrorPage from './pages/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/genshin_react",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/genshin_react",
        element: <Home />,
      },
      {
        path: "/genshin_react/contato",
        element: <Contato />,
      },
      {
        path: "/genshin_react/sobre",
        element: <Sobre />,
      },
      {
        path: "/genshin_react/chiori",
        element: <Chiori />,
      },
      {
        path: "/genshin_react/baizhu",
        element: <Baizhu />,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

