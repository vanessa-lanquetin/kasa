import styles from './index.module.scss'
import Banner from '../../components/Banner'
import imgBanner from '../../assets/banner-kasa.jpg'
import Card from '../../components/Card'
import mockData from '../../data/mockData.json'
import { Link } from 'react-router-dom'
import React from "react";

const index = () => {
	return (
		<div className={styles.container}>
			<Banner imageUrl={imgBanner} title="Chez vous, partout et ailleurs" />
			<div className={styles.card_container}>
				{mockData.map((logement, indx) => (
					<Link to={`/logement/${logement.id}`}>
						<Card
							imageUrl={logement.cover}
							cardTitle={logement.title}
							key={indx}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default index
