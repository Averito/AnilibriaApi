import { getAnilibriaData } from '@utils'
import {
	GetAnilibriaSeedStatsQueryParams,
	GetAnilibriaSeedStatsReturn
} from './getAnilibriaSeedStats.types'

export const getAnilibriaSeedStats = async (
	params: GetAnilibriaSeedStatsQueryParams = {}
) => {
	try {
		return await getAnilibriaData<GetAnilibriaSeedStatsReturn[]>(
			'/getSeedStats',
			params
		)
	} catch (error) {
		throw error
	}
}
