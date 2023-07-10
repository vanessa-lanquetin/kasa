import styles from './index.module.scss'
import Banner from '../../components/banner/Banner'
import imgBanner from '../../assets/img/banner-kasa.jpg'
import Card from '../../components/card/Card'
import mockData from '../../data/mockData.json'
import { Link } from 'react-router-dom'
import React from "react";

const index = () => {
	return (
    <div className={styles.container}>
      <Banner
        className={styles.home}
        imageUrl={imgBanner}
        title="Chez vous, partout et ailleurs"
      />
      <div className={styles.card_container}>
        {mockData.map((logement, indx) => (
          <Link
            to={`/logement/${logement.id}`}
            key={`${logement.id}-${indx}-cardlink`}
          >
            <Card imageUrl={logement.cover} cardTitle={logement.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default index
