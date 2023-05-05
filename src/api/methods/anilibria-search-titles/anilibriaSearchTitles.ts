import { AnilibriaSearchTitlesQueryParams } from '@api/methods/anilibria-search-titles/anilibriaSearchTitles.types'
import { getAnilibriaData } from '@utils'
import { Title } from '@api/types'

export const anilibriaSearchTitles = async (
	params: AnilibriaSearchTitlesQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title[]>('/searchTitles', params)
	} catch (error) {
		throw error
	}
}
