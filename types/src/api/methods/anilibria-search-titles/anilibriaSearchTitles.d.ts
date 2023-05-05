import { AnilibriaSearchTitlesQueryParams } from '@api/methods/anilibria-search-titles/anilibriaSearchTitles.types';
import { Title } from '@api/types';
export declare const anilibriaSearchTitles: (params?: AnilibriaSearchTitlesQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
