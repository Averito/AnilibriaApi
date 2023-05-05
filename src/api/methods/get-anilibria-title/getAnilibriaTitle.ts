import { getAnilibriaData } from '../../../utils'
import { Title } from '../../types/title'
import { GetAnilibriaTitleQueryParams } from './getAnilibriaTitle.types'

export const getAnilibriaTitle = async (
	params: GetAnilibriaTitleQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title>('/getTitle', params)
	} catch (error) {
		throw error
	}
}
