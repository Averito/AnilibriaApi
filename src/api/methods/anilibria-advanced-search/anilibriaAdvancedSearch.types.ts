import {
	GeneralQueryObjectParams,
	Include,
	PlaylistType,
	DescriptionType
} from '../types'

interface AnilibriaAdvancedSearchQueries extends GeneralQueryObjectParams {
	query: string
	order_by: string
	sort_direction: number
	include: Include
	description_type: DescriptionType
	playlist_type: PlaylistType
	limit: number
	after: number
}

export type AnilibriaAdvancedSearchQueryParams = Partial<
	Omit<AnilibriaAdvancedSearchQueries, 'query'>
> &
	Pick<AnilibriaAdvancedSearchQueries, 'query'>
