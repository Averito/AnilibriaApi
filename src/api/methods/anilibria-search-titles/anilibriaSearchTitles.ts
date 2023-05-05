import { AnilibriaSearchTitlesQueryParams } from './anilibriaSearchTitles.types'
import { getAnilibriaData } from '../../../utils'
import { Title } from '../../types'

export const anilibriaSearchTitles = async (
	params: AnilibriaSearchTitlesQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title[]>('/searchTitles', params)
	} catch (error) {
		throw error
	}
}
