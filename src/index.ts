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
	ObjectSeries
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
