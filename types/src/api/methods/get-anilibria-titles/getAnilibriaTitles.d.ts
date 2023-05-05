import { Title } from '../../types/title';
import { GetAnilibriaTitlesQueryParams } from './getAnilibriaTitles.types';
export declare const getAnilibriaTitles: (params?: GetAnilibriaTitlesQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
