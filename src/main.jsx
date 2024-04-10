import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Chiori from "./pages/Chiori"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import ErrorPage from "./pages/ErrorPage"
import { HelmetProvider } from "react-helmet-async"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/chiori",
        element: <Chiori />,
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
)

