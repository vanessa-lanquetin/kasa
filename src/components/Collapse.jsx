import React, { useState } from "react";
import "./Collapse.module.scss";

import styles from "./Collapse.module.scss";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Dropdown({title, content}) {
  // Utilisation du hook d'état pour gérer l'état "ouvert" du dropdown
  const [ouvert, setOuvert] = useState(false);

  return(
    <div className={`dropdown ${styles.dropdown}`} id={`dropdown-${title}`}>
      <div className={`dropdown ${styles.header_dropdown}`}>
        <div className={`dropdown ${styles.titre_dropdown}`}>{title}</div>
        {/* Utilisation de la classe "fleche-dropdown" avec la condition "ouvert" pour changer l'apparence de la flèche en fonction de l'état */}
        <span className={`fleche-dropdown ${ouvert ? 'ouvert' : ''} ${styles.fleche_dropdown}`} onClick={() => setOuvert(!ouvert)}>
          {/* Utilisation de la condition "ouvert" pour afficher l'icône FaChevronUp lorsque le dropdown est ouvert, sinon affiche l'icône FaChevronDown */}
          {ouvert ? <FaChevronUp className="chevron" style={{ color: '#fff' }} /> : <FaChevronDown className="chevron" style={{ color: '#fff' }} />}
        </span>
      </div>
      {/* Utilisation de la condition "ouvert" pour afficher le contenu du dropdown uniquement lorsque celui-ci est ouvert */}
      {ouvert && <div className={`dropdown ${styles.description_dropdown}`}>{content}</div>}
    </div>
  );
}

export default Dropdown;
