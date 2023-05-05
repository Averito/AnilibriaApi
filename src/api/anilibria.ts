import axios, { AxiosInstance, AxiosStatic } from 'axios'

import { ANILIBRIA_API_URI_BY_DEFAULT } from './anilibria.config'
import { AnilibriaOptions } from './anilibria.types'
import { GetAnilibriaTitleQueryParams } from './methods/get-anilibria-title'
import { GetAnilibriaTitlesQueryParams } from './methods/get-anilibria-titles'
import { GetAnilibriaUpdatesQueryParams } from './methods/get-anilibria-updates'
import { GetAnilibriaChangesQueryParams } from './methods/get-anilibria-changes'
import { GetAnilibriaScheduleQueryParams } from './methods/get-anilibria-schedule'
import { GetAnilibriaRandomTitleQueryParams } from './methods/get-anilibria-random-title'
import { GetAnilibriaYouTubeQueryParams } from './methods/get-anilibria-youtube'
import {
	GetAnilibriaFeedQueryParams,
	GetAnilibriaFeedReturn
} from './methods/get-anilibria-feed'
import {
	GetAnilibriaSeedStatsQueryParams,
	GetAnilibriaSeedStatsReturn
} from './methods/get-anilibria-seed-stats'
import { GetAnilibriaRssQueryParams } from './methods/get-anilibria-rss'
import { AnilibriaSearchTitlesQueryParams } from './methods/anilibria-search-titles'
import { AnilibriaAdvancedSearchQueryParams } from './methods/anilibria-advanced-search'
import { GetAnilibriaTeamReturn } from './methods/get-anilibria-team'
import { getAnilibriaData } from '../utils'
import { Schedule, YouTube, Title } from './types'

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

	public async getTitle(params: GetAnilibriaTitleQueryParams = {}) {
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

	public async getTitles(params: GetAnilibriaTitlesQueryParams = {}) {
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

	public async getUpdates(params: GetAnilibriaUpdatesQueryParams = {}) {
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

	public async getChanges(params: GetAnilibriaChangesQueryParams = {}) {
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

	public async getSchedule(params: GetAnilibriaScheduleQueryParams = {}) {
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

	public async getRandomTitle(params: GetAnilibriaRandomTitleQueryParams = {}) {
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

	public async getYouTube(params: GetAnilibriaYouTubeQueryParams = {}) {
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

	public async getFeed(params: GetAnilibriaFeedQueryParams = {}) {
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

	public async getYears() {
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

	public async getGenres() {
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

	public async getCachingNodes() {
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

	public async getTeam() {
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

	public async getSeedStats(params: GetAnilibriaSeedStatsQueryParams = {}) {
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

	public async getRss(params: GetAnilibriaRssQueryParams = {}) {
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

	public async searchTitles(params: AnilibriaSearchTitlesQueryParams = {}) {
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

	public async advancedSearch(params: AnilibriaAdvancedSearchQueryParams) {
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
