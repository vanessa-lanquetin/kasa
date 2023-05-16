import styles from './index.module.scss'
import Banner from '../../components/Banner'
import imgBanner from '../../assets/banner-kasa.jpg'
import Card from '../../components/Card'
import mockData from '../../data/mockData.json'

const index = () => {
	return (
		<div className={styles.container}>
			<Banner imageUrl={imgBanner} title="Chez vous, partout et ailleurs" />
			<div className={styles.card_container}>
				{mockData.map((logement, indx) => (
					<Card
						imageUrl={logement.cover}
						cardTitle={logement.title}
						key={indx}
					/>
				))}
			</div>
		</div>
	)
}

export default index
