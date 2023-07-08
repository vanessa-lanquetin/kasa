import React from "react";
import PropTypes from "prop-types";
import styles from "./Carrousel.module.scss";
import { useState } from "react";
import Arrow from "./Arrow";

const Carrousel = ({ pictures }) => {
  // Déclare une variable d'état `imgIndx` avec une valeur initiale de 0
  let [imgIndx, setImgIndx] = useState(0);

  // Fonction de gestion du clic sur les flèches du carrousel
  const handleClick = (direction) => {
    if (direction === "right") {
      // Vérifie si l'index actuel est inférieur à l'index maximum
      if (pictures.length - 1 > imgIndx) {
        // Augmente l'index actuel de 1
        setImgIndx((imgIndx) => imgIndx + 1);
      } else {
        // Sinon, retourne à l'index 0 (début du carrousel)
        setImgIndx(0);
      }
    }
    if (direction === "left") {
      //Vérifie si l'index actuel est égal à 0 (début du carrousel)
      if (imgIndx === 0) {
        // Définit l'indice actuel sur l'index maximum (fin du carrousel)
        setImgIndx(pictures.length - 1);
      } else {
        // Sinon, diminue l'index actuel de 1
        setImgIndx((imgIndx) => imgIndx - 1);
      }
    }
  };

  return (
    //Rendu du composant
    <div className={styles.carrouselCont}>
      {/*Affiche la flèche de gauche si le carrousel contient qu'une image
        // "&&" pour effectuer une évaluation conditionnelle.
        // Si la condition "pictures.length > 1" est vraie, les éléments suivants seront affichés.
        // Sinon, si la condition est fausse, ces éléments seront ignorés et non affichés.*/
      }
      {pictures.length > 1 && (
        <button className={styles.btn} onClick={() => handleClick("left")}>
          <Arrow clr="white" />
        </button>
      )}

      {/* Affiche l'image courante*/}
      <img src={pictures[imgIndx]} alt="app" />

      {/*Affiche la flèche de droite si le carrousel contient plus d'une image */}
      {pictures.length > 1 && (
        <button className={styles.btn} onClick={() => handleClick("right")}>
          <Arrow clr="white" />
        </button>
      )}
    </div>
  );
};

Carrousel.propTypes = {
  pictures: PropTypes.array, // Propriété `pictures` de type array
};

export default Carrousel;
