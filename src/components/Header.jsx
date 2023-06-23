// import PropTypes from 'prop-types'
import logo from '../assets/logo-kasa.png'
import styles from './Header.module.scss'
import React from "react";
import { Link } from 'react-router-dom'

const Header = (props) => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<img src={logo} alt="logo Kasa" />
				<ul>
					<li>
						<Link to="/.">Accueil</Link>
					</li>
					<li>
						<Link to="/about">A Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
