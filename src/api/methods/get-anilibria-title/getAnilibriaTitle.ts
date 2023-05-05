import { getAnilibriaData } from '@utils'
import { Title } from '@api/types'
import { GetAnilibriaTitleQueryParams } from '@api/methods/get-anilibria-title/getAnilibriaTitle.types'

export const getAnilibriaTitle = async (
	params: GetAnilibriaTitleQueryParams = {}
) => {
	try {
		return await getAnilibriaData<Title>('/getTitle', params)
	} catch (error) {
		throw error
	}
}
