export interface GeneralQueryObjectParams {
    filter: string[];
    remove: string[];
}
export type PlaylistType = 'object' | 'array';
export type DescriptionType = 'html' | 'plain' | 'no_view_order';
export type Include = ('raw_poster' | 'raw_torrent' | 'torrent_meta')[];
