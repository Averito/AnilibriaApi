import { getAnilibriaData } from '@utils'
import { GetAnilibriaTeamReturn } from './getAnilibriaTeam.types'

export const getAnilibriaTeam = async () => {
	try {
		return await getAnilibriaData<GetAnilibriaTeamReturn>('/getTeam')
	} catch (error) {
		throw error
	}
}
