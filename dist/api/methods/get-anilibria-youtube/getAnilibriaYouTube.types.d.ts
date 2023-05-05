import { GeneralQueryObjectParams } from '@api/methods/types';
interface GetAnilibriaYouTubeQueries extends GeneralQueryObjectParams {
    limit: number;
    since: number;
    after: number;
}
export type GetAnilibriaYouTubeQueryParams = Partial<GetAnilibriaYouTubeQueries>;
export {};
//# sourceMappingURL=getAnilibriaYouTube.types.d.ts.map