import { GeneralQueryObjectParams } from '../types';
interface GetAnilibriaYouTubeQueries extends GeneralQueryObjectParams {
    limit: number;
    since: number;
    after: number;
}
export type GetAnilibriaYouTubeQueryParams = Partial<GetAnilibriaYouTubeQueries>;
export {};
