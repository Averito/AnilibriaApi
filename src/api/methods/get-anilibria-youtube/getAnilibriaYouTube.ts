import { GetAnilibriaYouTubeQueryParams } from './getAnilibriaYouTube.types'
import { getAnilibriaData } from '../../../utils/get-anilibria-data'
import { YouTube } from '../../types/youtube'

export const getAnilibriaYouTube = async (
	params: GetAnilibriaYouTubeQueryParams = {}
) => {
	try {
		return await getAnilibriaData<YouTube[]>('/getYouTube', params)
	} catch (error) {
		throw error
	}
}
