import { Anilibria } from './api/anilibria'
import { ANILIBRIA_API_URI_BY_DEFAULT } from './api/anilibria.config'
import {
	getAnilibriaFeed,
	getAnilibriaGenres,
	anilibriaAdvancedSearch,
	anilibriaSearchTitles,
	getAnilibriaRss,
	getAnilibriaSeedStats,
	getAnilibriaRandomTitle,
	getAnilibriaCachingNodes,
	getAnilibriaYouTube,
	getAnilibriaChanges,
	getAnilibriaTitles,
	getAnilibriaUpdates,
	getAnilibriaTitle,
	getAnilibriaYears,
	getAnilibriaSchedule,
	getAnilibriaTeam
} from './api/methods'
import type { GetAnilibriaTitleQueryParams } from './api/methods/get-anilibria-title'
import type { GetAnilibriaTitlesQueryParams } from './api/methods/get-anilibria-titles'
import type { GetAnilibriaUpdatesQueryParams } from './api/methods/get-anilibria-updates'
import type { GetAnilibriaChangesQueryParams } from './api/methods/get-anilibria-changes'
import type { GetAnilibriaScheduleQueryParams } from './api/methods/get-anilibria-schedule'
import type { GetAnilibriaRandomTitleQueryParams } from './api/methods/get-anilibria-random-title'
import type { GetAnilibriaYouTubeQueryParams } from './api/methods/get-anilibria-youtube'
import type {
	GetAnilibriaFeedQueryParams,
	GetAnilibriaFeedReturn
} from './api/methods/get-anilibria-feed'
import type {
	GetAnilibriaSeedStatsQueryParams,
	GetAnilibriaSeedStatsReturn
} from './api/methods/get-anilibria-seed-stats'
import type { GetAnilibriaRssQueryParams } from './api/methods/get-anilibria-rss'
import type { AnilibriaSearchTitlesQueryParams } from './api/methods/anilibria-search-titles'
import type { AnilibriaAdvancedSearchQueryParams } from './api/methods/anilibria-advanced-search'
import type { GetAnilibriaTeamReturn } from './api/methods/get-anilibria-team'
import { AnilibriaOptions } from './api/anilibria.types'
import type {
	Title,
	YouTube,
	Schedule,
	Genres,
	Years,
	Torrent,
	Rating,
	Series,
	Block,
	ObjectSeries
} from './api/types'

export type {
	Title,
	YouTube,
	Schedule,
	Genres,
	Block,
	Years,
	Torrent,
	Rating,
	Series,
	ObjectSeries,
	AnilibriaAdvancedSearchQueryParams,
	AnilibriaSearchTitlesQueryParams,
	GetAnilibriaTeamReturn,
	GetAnilibriaFeedReturn,
	GetAnilibriaSeedStatsQueryParams,
	GetAnilibriaSeedStatsReturn,
	GetAnilibriaFeedQueryParams,
	GetAnilibriaYouTubeQueryParams,
	GetAnilibriaRandomTitleQueryParams,
	GetAnilibriaScheduleQueryParams,
	GetAnilibriaChangesQueryParams,
	GetAnilibriaUpdatesQueryParams,
	GetAnilibriaRssQueryParams,
	GetAnilibriaTitleQueryParams,
	GetAnilibriaTitlesQueryParams,
	AnilibriaOptions
}
export {
	ANILIBRIA_API_URI_BY_DEFAULT,
	Anilibria,
	getAnilibriaTeam,
	getAnilibriaFeed,
	getAnilibriaGenres,
	getAnilibriaChanges,
	getAnilibriaTitles,
	getAnilibriaUpdates,
	getAnilibriaRandomTitle,
	getAnilibriaCachingNodes,
	getAnilibriaYouTube,
	anilibriaSearchTitles,
	getAnilibriaRss,
	anilibriaAdvancedSearch,
	getAnilibriaSchedule,
	getAnilibriaYears,
	getAnilibriaTitle,
	getAnilibriaSeedStats
}
