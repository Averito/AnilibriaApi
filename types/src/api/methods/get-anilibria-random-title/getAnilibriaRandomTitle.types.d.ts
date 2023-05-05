import { GeneralQueryObjectParams, Include, PlaylistType, DescriptionType } from '../types';
interface GetAnilibriaRandomTitleQueries extends GeneralQueryObjectParams {
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
}
export type GetAnilibriaRandomTitleQueryParams = Partial<GetAnilibriaRandomTitleQueries>;
export {};
