// import PropTypes from 'prop-types'
import logo from '../assets/logo-kasa.png'
import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<img src={logo} alt="logo Kasa" />
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">A Propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
