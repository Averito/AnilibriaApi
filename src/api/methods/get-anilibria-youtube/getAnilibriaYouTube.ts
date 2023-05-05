import { GetAnilibriaYouTubeQueryParams } from './getAnilibriaYouTube.types'
import { getAnilibriaData } from '@utils'
import { Youtube } from '@api/types'

export const getAnilibriaYouTube = async (
	params: GetAnilibriaYouTubeQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Youtube[]>('/getYouTube', params)
	} catch (error) {
		throw error
	}
}
