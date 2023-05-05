import { DescriptionType, GeneralQueryObjectParams, Include, PlaylistType } from '@api/methods/types';
interface GetAnilibriaUpdatesQueries extends GeneralQueryObjectParams {
    limit: number;
    after: number;
    since: number;
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
}
export type GetAnilibriaUpdatesQueryParams = Partial<GetAnilibriaUpdatesQueries>;
export {};
//# sourceMappingURL=getAnilibriaUpdates.types.d.ts.map