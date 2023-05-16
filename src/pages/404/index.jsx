import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const index = () => {
	return (
		<section className={styles.container}>
			<h2>404</h2>
			<p>Oups! La page que vous demandez n'existe pas.</p>

			<NavLink to="/">Retourner sur la page d’accueil</NavLink>
		</section>
	)
}

export default index
