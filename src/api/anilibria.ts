import axios, { AxiosInstance, AxiosStatic } from 'axios'

import { ANILIBRIA_API_URI_BY_DEFAULT } from '@api/anilibria.config'
import { AnilibriaOptions } from '@api/anilibria.types'
import { GetAnilibriaTitleQueryParams } from '@api/methods/get-anilibria-title'
import { GetAnilibriaTitlesQueryParams } from '@api/methods/get-anilibria-titles'
import { GetAnilibriaUpdatesQueryParams } from '@api/methods/get-anilibria-updates'
import { GetAnilibriaChangesQueryParams } from '@api/methods/get-anilibria-changes'
import { GetAnilibriaScheduleQueryParams } from '@api/methods/get-anilibria-schedule'
import { GetAnilibriaRandomTitleQueryParams } from '@api/methods/get-anilibria-random-title'
import { GetAnilibriaYouTubeQueryParams } from '@api/methods/get-anilibria-youtube'
import {
	GetAnilibriaFeedQueryParams,
	GetAnilibriaFeedReturn
} from '@api/methods/get-anilibria-feed'
import {
	GetAnilibriaSeedStatsQueryParams,
	GetAnilibriaSeedStatsReturn
} from '@api/methods/get-anilibria-seed-stats'
import { GetAnilibriaRssQueryParams } from '@api/methods/get-anilibria-rss'
import { AnilibriaSearchTitlesQueryParams } from '@api/methods/anilibria-search-titles'
import { AnilibriaAdvancedSearchQueryParams } from '@api/methods/anilibria-advanced-search'
import { getAnilibriaData } from '@utils'
import { Schedule, Title, YouTube } from '@api/types'
import { GetAnilibriaTeamReturn } from '@api/methods/get-anilibria-team'

export class Anilibria {
	private _url: string = ANILIBRIA_API_URI_BY_DEFAULT
	public get url() {
		return this._url
	}
	public set url(newUrl: string) {
		if (newUrl.endsWith('/')) {
			this._url = newUrl.slice(0, newUrl.length - 1)
			return
		}

		this._url = newUrl
	}

	private readonly _axiosInstance: AxiosStatic | AxiosInstance = axios

	constructor(options: AnilibriaOptions = {}) {
		if (options.url) this.url = options.url
		if (options.axiosOptions)
			this._axiosInstance = axios.create(options.axiosOptions)
	}

	public async getAnilibriaTitle(params: GetAnilibriaTitleQueryParams = {}) {
		try {
			return await getAnilibriaData<Title>(
				'/getTitle',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaTitles(params: GetAnilibriaTitlesQueryParams = {}) {
		try {
			return await getAnilibriaData<Title[]>(
				'/getTitles',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaUpdates(
		params: GetAnilibriaUpdatesQueryParams = {}
	) {
		try {
			return await getAnilibriaData<Title[]>(
				'/getUpdates',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaChanges(
		params: GetAnilibriaChangesQueryParams = {}
	) {
		try {
			return await getAnilibriaData<Title[]>(
				'/getChanges',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaSchedule(
		params: GetAnilibriaScheduleQueryParams = {}
	) {
		try {
			return await getAnilibriaData<Schedule[]>(
				'/getSchedule',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaRandomTitle(
		params: GetAnilibriaRandomTitleQueryParams = {}
	) {
		try {
			return await getAnilibriaData<Title>(
				'/getRandomTitle',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaYouTube(
		params: GetAnilibriaYouTubeQueryParams = {}
	) {
		try {
			return await getAnilibriaData<YouTube[]>(
				'/getYouTube',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaFeed(params: GetAnilibriaFeedQueryParams = {}) {
		try {
			return await getAnilibriaData<GetAnilibriaFeedReturn[]>(
				'/getFeed',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaYears() {
		try {
			return await getAnilibriaData<number[]>(
				'/getYears',
				{},
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaGenres() {
		try {
			return await getAnilibriaData<string[]>(
				'/getGenres',
				{},
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaCachingNodes() {
		try {
			return await getAnilibriaData<string[]>(
				'/getCachingNodes',
				{},
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaTeam() {
		try {
			return await getAnilibriaData<GetAnilibriaTeamReturn>(
				'/getTeam',
				{},
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaSeedStats(
		params: GetAnilibriaSeedStatsQueryParams = {}
	) {
		try {
			return await getAnilibriaData<GetAnilibriaSeedStatsReturn[]>(
				'/getSeedStats',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaRss(params: GetAnilibriaRssQueryParams = {}) {
		try {
			return await getAnilibriaData<string>(
				'/getRSS',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async anilibriaSearchTitles(
		params: AnilibriaSearchTitlesQueryParams = {}
	) {
		try {
			return await getAnilibriaData<Title[]>(
				'/searchTitles',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}

	public async anilibriaAdvancedSearch(
		params: AnilibriaAdvancedSearchQueryParams
	) {
		try {
			return await getAnilibriaData<Title[]>(
				'/advancedSearch',
				params,
				this._axiosInstance
			)
		} catch (error) {
			throw error
		}
	}
}
