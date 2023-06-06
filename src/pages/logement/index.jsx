import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/mockData.json'
import Carrousel from '../../components/Carrousel'
import TitleLogement from '../../components/TitleLogement'
import Tag from '../../components/Tag'

const Logement = () => {
	const params = useParams()
	const parmId = params.id

	const appart = logements.find((app) => app.id === parmId)
	// console.log(appart)

	const renderTags = () => {
		return appart.tags.map((tag) => {
			return <Tag text={tag} />
		})
	}

	/*   error handling  */
	return !appart ? (
		<Navigate to="/404" replace={true} />
	) : (
		<div>
			<Carrousel pictures={appart.pictures} />
			<TitleLogement
				titleData={{
					title: appart.title,
					location: appart.location,
				}}
			/>
			<div style={{ display: 'flex' }}>{renderTags()}</div>
		</div>
	)
}

export default Logement
