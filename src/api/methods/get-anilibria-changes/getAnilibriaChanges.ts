import { GetAnilibriaChangesQueryParams } from './getAnilibriaChanges.types'
import { getAnilibriaData } from '../../../utils'
import { Title } from '../../types'

export const getAnilibriaChanges = async (
	params: GetAnilibriaChangesQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title[]>('/getChanges', params)
	} catch (error) {
		throw error
	}
}
