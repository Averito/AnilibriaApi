import { AnilibriaSearchTitlesQueryParams } from './anilibriaSearchTitles.types';
import { Title } from '../../types';
export declare const anilibriaSearchTitles: (params?: AnilibriaSearchTitlesQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
