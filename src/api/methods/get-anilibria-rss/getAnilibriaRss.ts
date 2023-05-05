import { getAnilibriaData } from '@utils'
import { GetAnilibriaRssQueryParams } from './getAnilibriaRss.types'

export const getAnilibriaRss = async (
	params: GetAnilibriaRssQueryParams = {}
) => {
	try {
		return await getAnilibriaData<string>('/getTeam', params)
	} catch (error) {
		throw error
	}
}
