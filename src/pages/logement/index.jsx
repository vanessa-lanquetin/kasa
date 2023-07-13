import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/mockData.json";
import Carrousel from "../../components/carrousel/Carrousel";
import Tag from "../../components/tags/Tag";
import { FaStar } from "react-icons/fa";
import Collapse from "../../components/collapse/Collapse";
import styles from "./index.module.scss";

const Logement = () => {
  // Récupération des paramètres de l'URL
  const params = useParams();
  const parmId = params.id;

  // Recherche du logement correspondant à l'ID dans les données
  const appart = logements.find((app) => app.id === parmId);

  // Affichage des tags
  const RenderTags = () => {
    // Affiche les tags de l'appartement
    return (appart?.tags || []).map((tag, indx) => {
      // Pour chaque élément dans les tags de l'appartement, crée un composant <Tag>
      return <Tag text={tag} key={`tag-${indx}-${tag}-${appart?.id}`} />;
    });
  };

  // Fonction pour les étoiles de notation du logement
  const RenderStars = () => {
    const stars = [1, 2, 3, 4, 5];
    return (
      <div className={styles.stars}>
        {/* Affiche une icône d'étoile pour chaque star */}
        {stars.map((star, indx) => {
          if (!appart?.rating) return null; // Si aucune note n'est disponible, retourne null
          return (
            <FaStar
              key={`star-${indx}-${appart.id}`}
              style={{
                // Définit la couleur de l'étoile en fonction de sa valeur par rapport à la note
                // Si la valeur de l'étoile est inférieure ou égale à la note, la couleur est "#FF6060" (rouge),
                // sinon la couleur est "#E3E3E3" (gris clair)
                color: star <= Number(appart.rating) ? "#FF6060" : "#E3E3E3",
              }}
            />
          );
        })}
      </div>
    );
  };

  // Fonction pour afficher la liste des équipements dans le collapse
  const renderEquipments = () => {
    // Affiche les équipements de l'appartement
    return appart?.equipments.map((equipment, index) => (
      // Pour chaque équipement dans les équipements de l'appartement, crée un élément <div>
      // La clé unique est générée en utilisant l'index de l'équipement
      <div key={`equipment-${index}`}>{equipment}</div>
    ));
  };

  //Title Logement
  const TitleLogement = ({ titleData }) => {
    return (
      <>
        <h2 className={styles.title}>{titleData.title}</h2>
        <p className={styles.location}>{titleData.location}</p>
      </>
    );
  };

  //Si tu ne trouves pas de logement, redirgie vers la page 404
  return !appart ? (
    <Navigate to="/404" replace={true} />
  ) : (
    // Si tu trovues un logement, affiche les détails du logement
    <div>
      {/*Carrousel */}
      <Carrousel pictures={appart.pictures} />

      {/* Informations sur le logement */}
      <div className={styles.appart_container}>
        {/* Titre,Localisation et tags du logement */}
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

        {/* Etoiles et propriétaire */}
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
      {/* Collapses de description et équipements*/}
      <div className={`${styles.descriptionContainer} ${styles.container}`}>
        <div className={styles.descriptionContent}>
          <div className="description-content__description">
            {/* Description */}
            <Collapse title="Description" content={appart.description} />
          </div>
        </div>
        <div className={styles.descriptionContent}>
          {/* Equipements */}
          <Collapse title="Équipements" content={renderEquipments()} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
