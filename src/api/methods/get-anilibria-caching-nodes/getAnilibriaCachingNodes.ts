import { getAnilibriaData } from '../../../utils'

export const getAnilibriaCachingNodes = async () => {
	try {
		return await getAnilibriaData<string[]>('/getCachingNodes')
	} catch (error) {
		throw error
	}
}
