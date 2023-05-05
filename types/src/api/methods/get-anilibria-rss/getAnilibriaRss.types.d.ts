interface GetAnilibriaRssQueries {
    limit: number;
    after: number;
    since: number;
    session: string;
    rss_type: 'rss' | 'atom' | 'json';
}
export type GetAnilibriaRssQueryParams = Partial<GetAnilibriaRssQueries>;
export {};
