import {
	DescriptionType,
	GeneralQueryObjectParams,
	Include,
	PlaylistType
} from '@api/methods/types'

interface GetAnilibriaScheduleQueries extends GeneralQueryObjectParams {
	include: Include
	days: number[]
	description_type: DescriptionType
	playlist_type: PlaylistType
}

export type GetAnilibriaScheduleQueryParams =
	Partial<GetAnilibriaScheduleQueries>
