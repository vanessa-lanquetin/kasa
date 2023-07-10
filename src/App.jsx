//J'importe ces éléments de la bibliothèque Reacter Router pour créer les routes de l'applications
import {
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import React from "react";


// Pages
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/404";
import Logement from "./pages/logement";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Le Layout permet de définir une structure cohérente à toutes les pages de l'application.
const Layout = () => {
  return (
    //container global de l’application
    <div className="container_general">
      <Header />
      <main className="main">
        {/* C'est ici le contenu va s'afficher dynamiquement */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

/* Ici j'utilise la fonction createBrowserRouter qui prend en paramètre les routes définies avec createRoutesFromElements. */
const router = createBrowserRouter(
  createRoutesFromElements(
    //la racine de l'application est associée au layout qui sera utliisé sur toutes les pages
    <Route path="/" element={<Layout />}>
    {/* on utilise index ici pour dire qu'on utilise cette page quand on est à la racine. */}
      <Route index element={<Home />} />
			{/* On indique le chemin et la page correspondate pour chaque route */}
      <Route path="about" element={<About />} />
      <Route path="logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/kasa" }
);

//App renvoie le BrowserRouter contenant les routes définies.
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
