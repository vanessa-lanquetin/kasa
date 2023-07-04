import React from "react";
import styles from "./Footer.module.scss";
import footerLogo from "../../assets/img/logo-footer.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <Link to="/">
				<img src={footerLogo} alt="kaza logo footer" />
			</Link>
      <p>&copy; 2020 Kasa. All rights reserved </p>
    </footer>
  );
};

export default Footer;
