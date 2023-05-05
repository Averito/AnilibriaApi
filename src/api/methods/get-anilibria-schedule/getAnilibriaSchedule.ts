import { GetAnilibriaScheduleQueryParams } from './getAnilibriaSchedule.types'
import { getAnilibriaData } from '@utils'
import { Schedule } from '@api/types'

export const getAnilibriaSchedule = async (
	params: GetAnilibriaScheduleQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Schedule[]>('/getSchedule', params)
	} catch (error) {
		throw error
	}
}
