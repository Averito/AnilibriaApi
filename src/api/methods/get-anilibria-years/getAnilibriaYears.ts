import { getAnilibriaData } from '../../../utils'
import { Years } from '../../types/years'

export const getAnilibriaYears = async () => {
	try {
		return await getAnilibriaData<Years>('/getYears')
	} catch (error) {
		throw error
	}
}
