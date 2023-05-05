import { GetAnilibriaScheduleQueryParams } from './getAnilibriaSchedule.types'
import { getAnilibriaData } from '../../../utils'
import { Schedule } from '../../types'

export const getAnilibriaSchedule = async (
	params: GetAnilibriaScheduleQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Schedule[]>('/getSchedule', params)
	} catch (error) {
		throw error
	}
}
