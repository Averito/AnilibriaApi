import { GetAnilibriaUpdatesQueryParams } from './getAnilibriaUpdates.types'
import { getAnilibriaData } from '../../../utils'
import { Title } from '../../types/title'

export const getAnilibriaUpdates = async (
	params: GetAnilibriaUpdatesQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title[]>('/getRandomTitle', params)
	} catch (error) {
		throw error
	}
}
