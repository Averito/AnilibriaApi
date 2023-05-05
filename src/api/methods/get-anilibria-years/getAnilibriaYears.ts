import { getAnilibriaData } from '@utils'
import { Years } from '@api/types'

export const getAnilibriaYears = async () => {
	try {
		return await getAnilibriaData<Years>('/getYears')
	} catch (error) {
		throw error
	}
}
