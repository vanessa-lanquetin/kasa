import React, { useState } from "react";
import "./Collapse.module.scss";

import styles from "./Collapse.module.scss";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Dropdown({title, content}) {
  // Utilisation du hook d'état pour gérer l'état "ouvert" du dropdown
  //Le hook d'état permet déclarer une variable d'état et une fonction pour la mettre à jour. Lorsque la valeur de l'état change,   
  //React se charge de mettre à jour automatiquement le rendu du composant pour afficher le changement.
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className={`dropdown ${styles.dropdown}`} id={`dropdown-${title}`}>
      <div className={`dropdown ${styles.header_dropdown}`}>
        <div className={`dropdown ${styles.titre_dropdown}`}>{title}</div>
        {/* Utilisation de la classe "fleche-dropdown" avec la condition "ouvert" pour changer l'apparence de la flèche en fonction de l'état */}
        <span
          className={`fleche-dropdown ${ouvert ? "ouvert" : ""} ${
            styles.fleche_dropdown
          }`} // La classe "fleche-dropdown" est toujours appliquée, tandis que la classe "ouvert" est ajoutée uniquement si la variable d'état "ouvert" est vraie.
          onClick={() => setOuvert(!ouvert)} // Lorsqu'un clic se produit sur l'élément, cette fonction est appelée pour inverser la valeur de la variable d'état "ouvert"
        >
          {/* Utilisation de la condition "ouvert" pour afficher l'icône FaChevronUp lorsque le dropdown est ouvert, sinon affiche l'icône FaChevronDown */}
          {ouvert ? (
            <FaChevronUp className="chevron" style={{ color: "#fff" }} />
          ) : (
            <FaChevronDown className="chevron" style={{ color: "#fff" }} />
          )}
        </span>
      </div>
      {/* Utilisation de la condition "ouvert" pour afficher le contenu du dropdown uniquement lorsque celui-ci est ouvert */}
      {ouvert && (
        <div className={`dropdown ${styles.description_dropdown}`}>
          {content}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
