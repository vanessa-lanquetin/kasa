import styles from './index.moduole.scss'
import Banner from '../../components/Banner'
import imgBanner from '../../assets/banner-kasa.jpg'

const index = () => {
	return (
		<div className={styles.container}>
			<Banner imageUrl={imgBanner} title="Chez vous, partout et ailleurs" />
		</div>
	)
}

export default index
