import './App.css'
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';

//import Menu from './pages/Menu';
// <Menu />

function App() {
  return <>
      <Helmet>
      <meta charset="UTF-8" />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:site_name" content="Genshin Build" />
        <meta property="og:type" content="website" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="https://genshinbuild.com/favicon.ico" type="image/x-icon`" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="style.css" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>TODOS</title>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
  </>
};




export default App
