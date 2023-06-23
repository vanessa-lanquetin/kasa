import React from "react";
import PropTypes from "prop-types";
import styles from "./Carrousel.module.scss";
import { useState } from "react";
import Arrow from "./Arrow";

const Carrousel = ({ pictures }) => {
  let [imgIndx, setImgIndx] = useState(0);

  const handleClick = (direction) => {
    if (direction === "right") {
      if (pictures.length - 1 > imgIndx) {
        setImgIndx((imgIndx) => imgIndx + 1);
      } else {
        setImgIndx(0);
      }
    }
    if (direction === "left") {
      if (imgIndx === 0) {
        setImgIndx(pictures.length - 1);
      } else {
        setImgIndx((imgIndx) => imgIndx - 1);
      }
    }
  };
  return (
    <div className={styles.carrouselCont}>
      {
        pictures.length > 1 && (
          <button className={styles.btn} onClick={() => handleClick("left")}>
            <Arrow clr="white" />
          </button>
        )
      }
      <img src={pictures[imgIndx]} alt="app" />
      {
        pictures.length > 1 && (
          <button className={styles.btn} onClick={() => handleClick("right")}>
            <Arrow clr="white" />
          </button>
        )
      }
    </div>
  );
};

Carrousel.propTypes = {
  pictures: PropTypes.array,
};

export default Carrousel;
