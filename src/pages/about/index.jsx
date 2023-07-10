import Banner from "../../components/banner/Banner"; // Importation du composant Banner
import aboutImg from "../../assets/img/img-about.jpg"; // Importation de l'image pour la bannière
import React from "react"; // Importation du module React
import Collapse from "../../components/collapse/Collapse"; // Importation du composant Collapse
import CollapseData from "../../data/collapses.json"; // Importation des données de collapsibles depuis un fichier JSON
import styles from "./index.module.scss"; // Importation des styles spécifiques de la page

const index = () => {
  return (
    <div className={`about ${styles.about}`}>
      <Banner
        className={`banner ${styles.banner}`}
        imageUrl={aboutImg}
        maxHeight="223px"
      />
      {/* Affichage de la bannière avec le composant Banner */}
      <div className={`collapse ${styles.collapse}`}>
        <div className="collapse__dropdown">
          {CollapseData.map((item) => {
            return (
              <div key={item.id}>
                <Collapse content={item.content} title={item.title} />
                {/* Affichage du collapse avec le contenu et le titre fournis */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index; // Exportation du composant de la page
