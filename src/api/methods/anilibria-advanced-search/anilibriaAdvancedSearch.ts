import { getAnilibriaData } from '@utils'
import { Title } from '@api/types'
import { AnilibriaAdvancedSearchQueryParams } from './anilibriaAdvancedSearch.types'

export const anilibriaAdvancedSearch = async (
	params: AnilibriaAdvancedSearchQueryParams
) => {
	try {
		return await getAnilibriaData<Title[]>('/advancedSearch', params)
	} catch (error) {
		throw error
	}
}
