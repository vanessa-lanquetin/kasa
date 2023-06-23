import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/mockData.json'
import Carrousel from '../../components/Carrousel'
import TitleLogement from '../../components/TitleLogement'
import Tag from '../../components/Tag'
import { FaStar } from 'react-icons/fa'
import styles from './index.module.scss'

const Logement = () => {
	const params = useParams()
	const parmId = params.id

	const appart = logements.find((app) => app.id === parmId)

	const RenderTags = () => {
		return (appart?.tags|| []).map((tag, indx) => {
			return <Tag text={tag} key={`tag-${indx}-${tag}-${appart?.id}`} />;
		})
	}

	const RenderStars = () => {
		const stars = [1, 2, 3, 4, 5]

		return (
			<div className={styles.stars}>
				{stars.map((star, indx) => {
					if(!appart?.rating) return null
					return (
            <FaStar
              key={`star-${indx}-${appart.id}`}
              style={{
                color: star <= Number(appart.rating) ? "#FF6060" : "#E3E3E3",
              }}
            />
          );
				})}
			</div>
		)
	}

	/*   error handling  */
	return !appart ? (
		<Navigate to="/404" replace={true} />
	) : (
		<div>
			<Carrousel pictures={appart.pictures} />
			<div className={styles.appart_container}>
				<div className={styles.header}>
					<TitleLogement
						titleData={{
							title: appart.title,
							location: appart.location,
						}}
					/>
					<div className={styles.tags}>
						<RenderTags />
					</div>
				</div>
				<div className={styles['tags-stars-container']}>
					<div className={styles.host_container}>
						<h3>{appart.host.name.split(' ').map((t, index) => (<div key={`${index}-host-container`}>{t}</div>))} </h3>
						<img src={appart.host.picture} alt={appart.host.name} />
					</div>
					<div>
						<RenderStars />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Logement
