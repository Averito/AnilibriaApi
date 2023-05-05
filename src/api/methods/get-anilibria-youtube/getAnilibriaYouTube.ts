import { GetAnilibriaYouTubeQueryParams } from './getAnilibriaYouTube.types'
import { getAnilibriaData } from '@utils'
import { YouTube } from '@api/types'

export const getAnilibriaYouTube = async (
	params: GetAnilibriaYouTubeQueryParams = {}
) => {
	try {
		return await getAnilibriaData<YouTube[]>('/getYouTube', params)
	} catch (error) {
		throw error
	}
}
