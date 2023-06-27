import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-kasa.png";
import styles from "./Header.module.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to="/">
          <img src={logo} alt="logo Kasa" />
        </Link>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? styles.active : ""}
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
