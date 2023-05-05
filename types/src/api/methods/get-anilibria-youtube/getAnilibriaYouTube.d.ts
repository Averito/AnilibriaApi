import { GetAnilibriaYouTubeQueryParams } from './getAnilibriaYouTube.types';
import { YouTube } from '../../types/youtube';
export declare const getAnilibriaYouTube: (params?: GetAnilibriaYouTubeQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<YouTube[]>>;
