import {
	DescriptionType,
	GeneralQueryObjectParams,
	Include,
	PlaylistType
} from '@api/methods/types'

interface GetAnilibriaRandomTitleQueries extends GeneralQueryObjectParams {
	include: Include
	description_type: DescriptionType
	playlist_type: PlaylistType
}

export type GetAnilibriaRandomTitleQueryParams =
	Partial<GetAnilibriaRandomTitleQueries>
