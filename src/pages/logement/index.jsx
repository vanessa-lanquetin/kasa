import { useParams, Navigate } from 'react-router-dom'
import logements from '../../data/mockData.json'
import Carrousel from '../../components/Carrousel'

const Logement = () => {
	const params = useParams()
	const parmId = params.id

	const appart = logements.find((app) => app.id === parmId)
	// console.log(appart)

	/*   error handling  */
	return !appart ? (
		<Navigate to="/404" replace={true} />
	) : (
		<div>
			<Carrousel pictures={appart.pictures} />
		</div>
	)
}

export default Logement
