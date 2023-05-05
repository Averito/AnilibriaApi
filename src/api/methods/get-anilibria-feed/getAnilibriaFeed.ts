import {
	GetAnilibriaFeedQueryParams,
	GetAnilibriaFeedReturn
} from './getAnilibriaFeed.types'
import { getAnilibriaData } from '../../../utils'

export const getAnilibriaFeed = async (
	params: GetAnilibriaFeedQueryParams = {}
) => {
	try {
		return await getAnilibriaData<GetAnilibriaFeedReturn[]>('/getFeed', params)
	} catch (error) {
		throw error
	}
}
