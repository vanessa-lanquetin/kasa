import styles from './Footer.module.scss'
import footerLogo from '../assets/logo-footer.svg'

const Footer = () => {
	return (
		<footer className={styles.footer_container}>
			<img src={footerLogo} alt="kaza logo footer" />
			<p>&copy; 2020 Kasa. All rights reserved </p>
		</footer>
	)
}

export default Footer
