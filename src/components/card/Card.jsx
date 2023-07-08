import styles from "./Card.module.scss"; 
import PropTypes from "prop-types";
import React from "react";

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
  imageUrl: PropTypes.string, // Propriété `imageUrl` de type string
  cardTitle: PropTypes.string, // Propriété `cardTitle` de type string
};

export default Card; // Exporte le composant `Card` par défaut
