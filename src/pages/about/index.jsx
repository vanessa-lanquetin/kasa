import Banner from "../../components/banner/Banner";
import aboutImg from "../../assets/img/img-about.jpg";
import React from "react";
import Collapse from "../../components/collapse/Collapse";
import CollapseData from "../../data/collapses.json";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={`about ${styles.about}`}>
      <Banner className={`banner ${styles.banner}`} imageUrl={aboutImg} />
      <div className={`collapse ${styles.collapse}`}>
        <div className="collapse__dropdown">
          {CollapseData.map((item) => {
            return (
              <div key={item.id}>
                <Collapse content={item.content} title={item.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
