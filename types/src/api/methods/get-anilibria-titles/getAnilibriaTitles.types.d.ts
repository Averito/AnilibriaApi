import { GeneralQueryObjectParams, Include, PlaylistType, DescriptionType } from '../types';
interface GetAnilibriaTitlesQueries extends GeneralQueryObjectParams {
    id_list: number[];
    code_list: string[];
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
}
export type GetAnilibriaTitlesQueryParams = Partial<GetAnilibriaTitlesQueries>;
export {};
