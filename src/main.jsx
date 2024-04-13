import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
 
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import Home from "./header-pages/Home"
import TierList from "./header-pages/TierList"
import Teams from "./header-pages/Teams"
import Farming from "./header-pages/Farming"
import ErrorPage from "./header-pages/ErrorPage"
import Chiori from "./characters/Chiori"  

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
      path: "/tier-list",
      element: <TierList />,
      },
      {
      path: "/times",
      element: <Teams />,
      },
      {
      path: "/farming",
      element: <Farming />,
      },
      {
      path: "/chiori",
      element :<Chiori />, 
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

