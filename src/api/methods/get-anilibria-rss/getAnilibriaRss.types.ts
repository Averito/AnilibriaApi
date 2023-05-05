interface GetAnilibriaRssQueries {
	limit: number
	after: number
	since: number
	session: string
	rss_type: string
}

export type GetAnilibriaRssQueryParams = Partial<GetAnilibriaRssQueries>
