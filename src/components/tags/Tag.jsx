import React from "react"; 
import PropTypes from "prop-types"; 
import styles from "./Tag.module.scss"; 

const Tag = ({ text }) => {
  return <div className={styles.tag}>{text}</div>; // Affichage du texte du tag dans un élément <div> avec la classe de style "tag"
};

Tag.propTypes = {
  text: PropTypes.string, // Validation du type de la prop "text" comme étant une chaîne de caractères
};

export default Tag; // Exportation du composant Tag
