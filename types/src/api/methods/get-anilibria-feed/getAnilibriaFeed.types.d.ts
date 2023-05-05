import { GeneralQueryObjectParams, Include, PlaylistType, DescriptionType } from '../types';
import { Title, YouTube } from '../../types';
interface GetAnilibriaFeedQueries extends GeneralQueryObjectParams {
    limit: number;
    since: number;
    after: number;
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
}
export type GetAnilibriaFeedQueryParams = Partial<GetAnilibriaFeedQueries>;
export interface GetAnilibriaFeedReturnDataYouTube {
    youtube: YouTube;
}
export interface GetAnilibriaFeedReturnDataTitle {
    title: Title;
}
export type GetAnilibriaFeedReturn = GetAnilibriaFeedReturnDataYouTube | GetAnilibriaFeedReturnDataTitle;
export {};
