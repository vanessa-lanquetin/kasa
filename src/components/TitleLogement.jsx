import React from 'react'
import styles from './TitleLogement.module.scss'
import PropTypes from 'prop-types'

const TitleLogement = ({ titleData }) => {
	return (
		<>
			<h2 className={styles.title}>{titleData.title}</h2>
			<p className={styles.location}>{titleData.location}</p>
		</>
	)
}

TitleLogement.prototype = {
	titleData: PropTypes.shape({
		title: PropTypes.string,
		location: PropTypes.string,
	}),
}

export default TitleLogement
