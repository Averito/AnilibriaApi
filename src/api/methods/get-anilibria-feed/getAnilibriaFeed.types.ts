import {
	DescriptionType,
	GeneralQueryObjectParams,
	Include,
	PlaylistType
} from '@api/methods/types'
import { Title, Youtube } from '@api/types'

interface GetAnilibriaFeedQueries extends GeneralQueryObjectParams {
	limit: number
	since: number
	after: number
	include: Include
	description_type: DescriptionType
	playlist_type: PlaylistType
}

export type GetAnilibriaFeedQueryParams = Partial<GetAnilibriaFeedQueries>

export interface GetAnilibriaFeedReturnDataYouTube {
	youtube: Youtube
}

export interface GetAnilibriaFeedReturnDataTitle {
	title: Title
}

export type GetAnilibriaFeedReturn =
	| GetAnilibriaFeedReturnDataYouTube
	| GetAnilibriaFeedReturnDataTitle
