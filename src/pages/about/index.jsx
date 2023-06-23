import Banner from "../../components/Banner";
import aboutImg from "../../assets/img-about.jpg";
import React from "react";
import Collapse from "../../components/Collapse";
import CollapseData from "../../data/collapses.json";
import styles from "./index.module.scss";

const index = () => {
  return (
    <div className={`about ${styles.about}`}>
      <Banner imageUrl={aboutImg} maxHeight="223px" />
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
