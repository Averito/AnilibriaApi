import { GetAnilibriaRandomTitleQueryParams } from './getAnilibriaRandomTitle.types'
import { getAnilibriaData } from '../../../utils'
import { Title } from '../../types'

export const getAnilibriaRandomTitle = async (
	params: GetAnilibriaRandomTitleQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title>('/getRandomTitle', params)
	} catch (error) {
		throw error
	}
}
