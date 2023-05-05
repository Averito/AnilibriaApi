import { getAnilibriaData } from '../../../utils'
import { Title } from '../../types'
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
