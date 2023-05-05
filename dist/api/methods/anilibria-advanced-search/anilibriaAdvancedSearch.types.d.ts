import { DescriptionType, GeneralQueryObjectParams, Include, PlaylistType } from '@api/methods/types';
interface AnilibriaAdvancedSearchQueries extends GeneralQueryObjectParams {
    query: string;
    order_by: string;
    sort_direction: number;
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
    limit: number;
    after: number;
}
export type AnilibriaAdvancedSearchQueryParams = Partial<Omit<AnilibriaAdvancedSearchQueries, 'query'>> & Pick<AnilibriaAdvancedSearchQueries, 'query'>;
export {};
//# sourceMappingURL=anilibriaAdvancedSearch.types.d.ts.map