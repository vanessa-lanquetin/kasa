import React from "react";
import PropTypes from "prop-types";
import style from "./Banner.module.scss";

const Banner = ({ title, imageUrl }) => {
  // Déclare le composant `Banner` en utilisant une fonction fléchée et en déstructurant les props

  return (
    <section className={style.banner}>
      {/* Affiche le titre uniquement si `title` est défini */}
      {title ? <h2 className={style.banner__title}>{title}</h2> : ""}
      <img src={imageUrl} alt={title} />
    </section>
  );
};

Banner.propTypes = {
  className: PropTypes.string, // Propriété `className` de type string
  imageUrl: PropTypes.string, // Propriété `imageUrl` de type string
  title: PropTypes.string, // Propriété `title` de type string
};

export default Banner; // Exporte le composant `Banner` par défaut
