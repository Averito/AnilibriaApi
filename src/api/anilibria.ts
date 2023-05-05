import axios, { AxiosInstance, AxiosStatic } from 'axios'

import { ANILIBRIA_API_URI_BY_DEFAULT } from '@api/anilibria.config'
import { AnilibriaOptions } from '@api/anilibria.types'
import {
	anilibriaSearchTitles,
	anilibriaAdvancedSearch,
	getAnilibriaTitle,
	getAnilibriaTitles,
	getAnilibriaRss,
	getAnilibriaYears,
	getAnilibriaRandomTitle,
	getAnilibriaSeedStats,
	getAnilibriaTeam,
	getAnilibriaGenres,
	getAnilibriaFeed,
	getAnilibriaYouTube,
	getAnilibriaUpdates,
	getAnilibriaCachingNodes,
	getAnilibriaChanges,
	getAnilibriaSchedule
} from '@api/methods'
import { GetAnilibriaTitleQueryParams } from '@api/methods/get-anilibria-title'
import { GetAnilibriaTitlesQueryParams } from '@api/methods/get-anilibria-titles'
import { GetAnilibriaUpdatesQueryParams } from '@api/methods/get-anilibria-updates'
import { GetAnilibriaChangesQueryParams } from '@api/methods/get-anilibria-changes'
import { GetAnilibriaScheduleQueryParams } from '@api/methods/get-anilibria-schedule'
import { GetAnilibriaRandomTitleQueryParams } from '@api/methods/get-anilibria-random-title'
import { GetAnilibriaYouTubeQueryParams } from '@api/methods/get-anilibria-youtube'
import { GetAnilibriaFeedQueryParams } from '@api/methods/get-anilibria-feed'
import { GetAnilibriaSeedStatsQueryParams } from '@api/methods/get-anilibria-seed-stats'
import { GetAnilibriaRssQueryParams } from '@api/methods/get-anilibria-rss'
import { AnilibriaSearchTitlesQueryParams } from '@api/methods/anilibria-search-titles'
import { AnilibriaAdvancedSearchQueryParams } from '@api/methods/anilibria-advanced-search'

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

	private _axiosInstance: AxiosStatic | AxiosInstance = axios

	constructor(options: AnilibriaOptions = {}) {
		if (options.url) this.url = options.url
		if (options.axiosOptions)
			this._axiosInstance = axios.create(options.axiosOptions)
	}

	public async getAnilibriaTitle(params: GetAnilibriaTitleQueryParams = {}) {
		try {
			return await getAnilibriaTitle(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaTitles(params: GetAnilibriaTitlesQueryParams = {}) {
		try {
			return await getAnilibriaTitles(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaUpdates(
		params: GetAnilibriaUpdatesQueryParams = {}
	) {
		try {
			return await getAnilibriaUpdates(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaChanges(
		params: GetAnilibriaChangesQueryParams = {}
	) {
		try {
			return await getAnilibriaChanges(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaSchedule(
		params: GetAnilibriaScheduleQueryParams = {}
	) {
		try {
			return await getAnilibriaSchedule(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaRandomTitle(
		params: GetAnilibriaRandomTitleQueryParams = {}
	) {
		try {
			return await getAnilibriaRandomTitle(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaYouTube(
		params: GetAnilibriaYouTubeQueryParams = {}
	) {
		try {
			return await getAnilibriaYouTube(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaFeed(params: GetAnilibriaFeedQueryParams = {}) {
		try {
			return await getAnilibriaFeed(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaYears() {
		try {
			return await getAnilibriaYears()
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaGenres() {
		try {
			return await getAnilibriaGenres()
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaCachingNodes() {
		try {
			return await getAnilibriaCachingNodes()
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaTeam() {
		try {
			return await getAnilibriaTeam()
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaSeedStats(
		params: GetAnilibriaSeedStatsQueryParams = {}
	) {
		try {
			return await getAnilibriaSeedStats(params)
		} catch (error) {
			throw error
		}
	}

	public async getAnilibriaRss(params: GetAnilibriaRssQueryParams = {}) {
		try {
			return await getAnilibriaRss(params)
		} catch (error) {
			throw error
		}
	}

	public async anilibriaSearchTitles(
		params: AnilibriaSearchTitlesQueryParams = {}
	) {
		try {
			return await anilibriaSearchTitles(params)
		} catch (error) {
			throw error
		}
	}

	public async anilibriaAdvancedSearch(
		params: AnilibriaAdvancedSearchQueryParams
	) {
		try {
			return await anilibriaAdvancedSearch(params)
		} catch (error) {
			throw error
		}
	}
}
