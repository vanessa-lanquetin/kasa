import styles from "./Card.module.scss"; 
import PropTypes from "prop-types";
import React from "react";

//Le composant card sera utiliser pour afficher les différents logements sur la page home.  Il affichera l'image et le titre correspond au logement 
const Card = ({ imageUrl, cardTitle }) => {
  // Déclare le composant `Card` en utilisant une fonction fléchée et en déstructurant les props

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={cardTitle} />
      <h2>{cardTitle}</h2>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  cardTitle: PropTypes.string,
};

export default Card; // Exporte le composant `Card`
