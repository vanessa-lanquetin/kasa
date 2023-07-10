import React from "react";
import PropTypes from "prop-types";
import style from "./Banner.module.scss";


//Banner sert à afficxher une bannière, le composant affichera un titre avec title et une image avec imageUrl
const Banner = ({ className, title, imageUrl }) => {
  return (
    <section className={`${className ? `${className} ` : ""}${style.banner}`}>
      {/* Affiche le titre uniquement si `title` est défini */}
      {title ? <h2 className={style.banner__title}>{title}</h2> : ""}
      <img src={imageUrl} alt={title} />
    </section>
  );
};


Banner.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  maxHeight: PropTypes.string,
};

export default Banner; // Exporte le composant `Banner`
