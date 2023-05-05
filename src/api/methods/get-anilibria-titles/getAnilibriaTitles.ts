import { getAnilibriaData } from '@utils'
import { Title } from '@api/types'
import { GetAnilibriaTitlesQueryParams } from './getAnilibriaTitles.types'

export const getAnilibriaTitles = async (
	params: GetAnilibriaTitlesQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title[]>('/getTitles', params)
	} catch (error) {
		throw error
	}
}
