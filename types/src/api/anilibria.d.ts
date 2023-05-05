import { AnilibriaOptions } from './anilibria.types';
import { GetAnilibriaTitleQueryParams } from './methods/get-anilibria-title';
import { GetAnilibriaTitlesQueryParams } from './methods/get-anilibria-titles';
import { GetAnilibriaUpdatesQueryParams } from './methods/get-anilibria-updates';
import { GetAnilibriaChangesQueryParams } from './methods/get-anilibria-changes';
import { GetAnilibriaScheduleQueryParams } from './methods/get-anilibria-schedule';
import { GetAnilibriaRandomTitleQueryParams } from './methods/get-anilibria-random-title';
import { GetAnilibriaYouTubeQueryParams } from './methods/get-anilibria-youtube';
import { GetAnilibriaFeedQueryParams, GetAnilibriaFeedReturn } from './methods/get-anilibria-feed';
import { GetAnilibriaSeedStatsQueryParams, GetAnilibriaSeedStatsReturn } from './methods/get-anilibria-seed-stats';
import { GetAnilibriaRssQueryParams } from './methods/get-anilibria-rss';
import { AnilibriaSearchTitlesQueryParams } from './methods/anilibria-search-titles';
import { AnilibriaAdvancedSearchQueryParams } from './methods/anilibria-advanced-search';
import { GetAnilibriaTeamReturn } from './methods/get-anilibria-team';
import { Schedule, YouTube, Title } from './types';
export declare class Anilibria {
    private _url;
    get url(): string;
    set url(newUrl: string);
    private readonly _axiosInstance;
    constructor(options?: AnilibriaOptions);
    getAnilibriaTitle(params?: GetAnilibriaTitleQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title>>;
    getAnilibriaTitles(params?: GetAnilibriaTitlesQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title[]>>;
    getAnilibriaUpdates(params?: GetAnilibriaUpdatesQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title[]>>;
    getAnilibriaChanges(params?: GetAnilibriaChangesQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title[]>>;
    getAnilibriaSchedule(params?: GetAnilibriaScheduleQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Schedule[]>>;
    getAnilibriaRandomTitle(params?: GetAnilibriaRandomTitleQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title>>;
    getAnilibriaYouTube(params?: GetAnilibriaYouTubeQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<YouTube[]>>;
    getAnilibriaFeed(params?: GetAnilibriaFeedQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<GetAnilibriaFeedReturn[]>>;
    getAnilibriaYears(): Promise<import("../utils/get-anilibria-data").GetDataReturn<number[]>>;
    getAnilibriaGenres(): Promise<import("../utils/get-anilibria-data").GetDataReturn<string[]>>;
    getAnilibriaCachingNodes(): Promise<import("../utils/get-anilibria-data").GetDataReturn<string[]>>;
    getAnilibriaTeam(): Promise<import("../utils/get-anilibria-data").GetDataReturn<GetAnilibriaTeamReturn>>;
    getAnilibriaSeedStats(params?: GetAnilibriaSeedStatsQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<GetAnilibriaSeedStatsReturn[]>>;
    getAnilibriaRss(params?: GetAnilibriaRssQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<string>>;
    anilibriaSearchTitles(params?: AnilibriaSearchTitlesQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title[]>>;
    anilibriaAdvancedSearch(params: AnilibriaAdvancedSearchQueryParams): Promise<import("../utils/get-anilibria-data").GetDataReturn<Title[]>>;
}
