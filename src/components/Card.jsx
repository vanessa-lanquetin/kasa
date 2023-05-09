import styles from './Card.module.scss'
import { PropTypes } from 'prop-types'

const Card = ({ imageUrl, cardTitle }) => {
	return (
		<div className={styles.card}>
			<img src={imageUrl} alt={cardTitle} />
			<h2>{cardTitle}</h2>
		</div>
	)
}

Card.protoType = {
	imageUrl: PropTypes.string,
	cardTitle: PropTypes.string,
}

export default Card
