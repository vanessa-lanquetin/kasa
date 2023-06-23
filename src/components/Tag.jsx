import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.module.scss'

const Tag = ({ text }) => {
	return <div className={styles.tag}>{text}</div>
}

Tag.prototype = {
	text: PropTypes.string,
}

export default Tag
