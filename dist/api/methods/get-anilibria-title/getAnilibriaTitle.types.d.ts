import { DescriptionType, GeneralQueryObjectParams, Include, PlaylistType } from '@api/methods/types';
interface GetAnilibriaTitleQueries extends GeneralQueryObjectParams {
    id: number;
    code: string;
    torrent_id: number;
    include: Include;
    description_type: DescriptionType;
    playlist_type: PlaylistType;
}
export type GetAnilibriaTitleQueryParams = Partial<GetAnilibriaTitleQueries>;
export {};
//# sourceMappingURL=getAnilibriaTitle.types.d.ts.map