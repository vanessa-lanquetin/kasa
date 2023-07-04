import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/mockData.json";
import Carrousel from "../../components/carrousel/Carrousel";
import Tag from "../../components/tags/Tag";
import { FaStar } from "react-icons/fa";
import Collapse from "../../components/collapse/Collapse";
import styles from "./index.module.scss";
import PropTypes from "prop-types";

const TitleLogement = ({ titleData }) => {
  return (
    <>
      <h2 className={styles.title}>{titleData.title}</h2>
      <p className={styles.location}>{titleData.location}</p>
    </>
  );
};

TitleLogement.propTypes = {
  titleData: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
  }),
};
const Logement = () => {
  // Récupération des paramètres de l'URL
  const params = useParams();
  const parmId = params.id;

  // Recherche du logement correspondant à l'ID dans les données
  const appart = logements.find((app) => app.id === parmId);

  
  // Fonction pour rendre les tags du logement
  const RenderTags = () => {
    return (appart?.tags || []).map((tag, indx) => {
      return <Tag text={tag} key={`tag-${indx}-${tag}-${appart?.id}`} />;
    });
  };

  // Fonction pour rendre les étoiles de notation du logement
  const RenderStars = () => {
    const stars = [1, 2, 3, 4, 5];
    return (
      <div className={styles.stars}>
        {/* Affiche une icône d'étoile pour chaque étoile */}
        {stars.map((star, indx) => {
          if (!appart?.rating) return null; // Si aucune note n'est disponible, retourne null
          return (
            <FaStar
              key={`star-${indx}-${appart.id}`}
              style={{
                color: star <= Number(appart.rating) ? "#FF6060" : "#E3E3E3",
              }}
            />
          );
        })}
      </div>
    );
  };

  // Fonction pour afficher la liste des équipements
  const renderEquipments = () => {
    return appart?.equipments.map((equipment, index) => (
      <div key={`equipment-${index}`}>{equipment}</div>
    ));
  };

  return !appart ? (
    // Si le logement n'est pas trouvé, redirige vers la page 404
    <Navigate to="/404" replace={true} />
  ) : (
    // Affiche les détails du logement
    <div>
      <Carrousel pictures={appart.pictures} />
      <div className={styles.appart_container}>
        <div className={styles.header}>
          <TitleLogement
            titleData={{
              title: appart.title,
              location: appart.location,
            }}
          />
          <div className={styles.tags}>
            <RenderTags />
          </div>
        </div>
        <div className={styles["tags-stars-container"]}>
          <div className={styles.host_container}>
            <h3>
              {/* Divise le nom de l'hôte et affiche chaque partie */}
              {appart.host.name.split(" ").map((t, index) => (
                <div key={`${index}-host-container`}>{t}</div>
              ))}{" "}
            </h3>
            <img src={appart.host.picture} alt={appart.host.name} />
          </div>
          <div>
            <RenderStars />
          </div>
        </div>
      </div>
      <div className={`${styles.descriptionContainer} ${styles.container}`}>
        <div className={styles.descriptionContent}>
          <div className="description-content__description">
            <Collapse title="Description" content={appart.description} />
          </div>
        </div>
        <div className={styles.descriptionContent}>
          <Collapse title="Équipements" content={renderEquipments()} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
