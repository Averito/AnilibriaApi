import { GeneralQueryObjectParams, Include, PlaylistType, DescriptionType } from '../types';
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
