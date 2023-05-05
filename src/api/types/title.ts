import { Torrent } from '@api/types/torrent'
import { ObjectSeries } from '@api/types/object-series'
import { Rating } from '@api/types/rating'
import { Genres } from '@api/types/genres'
import { Block } from '@api/types/block'

export interface Title {
	id: number
	code: string
	names: {
		ru: string
		en: string
	}
	announce: string
	series: string
	posters: {
		original: {
			url: string
		}
		small: {
			url: string
		}
	}
	season: {
		string: string
		year: string
	}
	favorite: Rating
	last: number
	moon: string
	status: {
		string: string
	}
	type: {
		full_string: string
		string: string
		series: number
		length: number
	}
	last_changes: number
	updated: number
	team: {
		voice: string[]
		timing: string[]
		translator: string[]
		editing: string[]
		decor: string[]
	}
	genres: Genres
	year: number
	day: number
	description: string
	blocked: Block
	player: {
		host: string
		playlist: ObjectSeries
		series: {
			first: number
			last: number
			string: string
		}
	}
	torrents?: {
		list: Torrent[]
	}
}
