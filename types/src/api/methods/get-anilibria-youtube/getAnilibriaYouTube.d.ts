import { GetAnilibriaYouTubeQueryParams } from './getAnilibriaYouTube.types';
import { YouTube } from '@api/types';
export declare const getAnilibriaYouTube: (params?: GetAnilibriaYouTubeQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<YouTube[]>>;
