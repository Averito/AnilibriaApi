import { GetAnilibriaGenresQueryParams } from './getAnilibriaGenres.types'
import { getAnilibriaData } from '../../../utils'
import { Genres } from '../../types'

export const getAnilibriaGenres = async (
	params: GetAnilibriaGenresQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Genres>('/getGenres', params)
	} catch (error) {
		throw error
	}
}
