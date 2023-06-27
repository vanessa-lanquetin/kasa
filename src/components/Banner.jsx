import React from "react";
import PropTypes from "prop-types";
import style from './Banner.module.scss'

const Banner = ({ title, imageUrl, maxHeight }) => {
	return (
		<section className={style.banner} style={{ maxHeight }}>
			{title ? <h2 className={style.banner__title}>{title}</h2> : ''}
			<img src={imageUrl} alt={title} />
		</section>
	)
}

Banner.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  maxHeight: PropTypes.string,
};

export default Banner
