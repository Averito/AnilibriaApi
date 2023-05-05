import { GetAnilibriaUpdatesQueryParams } from '@api/methods/get-anilibria-updates/getAnilibriaUpdates.types'
import { getAnilibriaData } from '@utils'
import { Title } from '@api/types'

export const getAnilibriaUpdates = async (
	params: GetAnilibriaUpdatesQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title[]>('/getRandomTitle', params)
	} catch (error) {
		throw error
	}
}
