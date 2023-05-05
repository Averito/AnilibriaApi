import { GeneralQueryObjectParams, Include, PlaylistType, DescriptionType } from '../types';
interface AnilibriaSearchTitlesQueries extends GeneralQueryObjectParams {
    search: string;
    year: string[];
    season_code: string[];
    genres: string[];
    voice: string[];
    translator: string[];
    editing: string[];
    decor: string[];
    timing: string[];
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
    limit: number;
    after: number;
}
export type AnilibriaSearchTitlesQueryParams = Partial<AnilibriaSearchTitlesQueries>;
export {};
