import React from "react";
import { Link, useLocation } from "react-router-dom"; // Importation des composants Link et useLocation depuis react-router-dom
import logo from "../../assets/img/logo-kasa.png"; // Importation de l'image du logo
import styles from "./Header.module.scss"; // Importation des styles spécifiques du composant Header

const Header = () => {
  const location = useLocation(); // Utilisation du hook useLocation pour obtenir l'URL de la page actuelle

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/"> {/* Lien vers la page d'accueil */}
          <img src={logo} alt="logo Kasa" /> {/* Affichage du logo */}
        </Link>
        <ul> {/* Liste des éléments de navigation */}
          <li>
            <Link
              to="/" // Lien vers la page d'accueil
              className={location.pathname === "/" ? styles.active : ""} // Classe "active" si l'URL correspond à la page d'accueil
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about" // Lien vers la page "A Propos"
              className={location.pathname === "/about" ? styles.active : ""} // Classe "active" si l'URL correspond à la page "A Propos"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
