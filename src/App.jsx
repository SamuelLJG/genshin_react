import "./App.css"
import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return <>
    <Header />
    <Outlet />
    <Helmet>
      <meta charset="UTF-8" />
      <meta property="og:site_name" content="Genshin Build" />
      <meta property="og:type" content="website" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#191919" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="robots" content="max-image-preview:large" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="https://genshinbuild.com/favicon.ico" type="image/x-icon`" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </Helmet>
    <Footer />
  </>
}




export default App
