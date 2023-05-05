import { GetAnilibriaGenresQueryParams } from '@api/methods/get-anilibria-genres/getAnilibriaGenres.types'
import { getAnilibriaData } from '@utils'
import { Genres } from '@api/types'

export const getAnilibriaGenres = async (
	params: GetAnilibriaGenresQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Genres>('/getGenres', params)
	} catch (error) {
		throw error
	}
}
