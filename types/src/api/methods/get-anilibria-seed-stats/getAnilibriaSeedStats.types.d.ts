import { GeneralQueryObjectParams } from '../types';
interface GetAnilibriaSeedStatsQueries extends GeneralQueryObjectParams {
    users: string[];
    limit: number;
    after: number;
    order: number;
    sort_by: string;
}
export type GetAnilibriaSeedStatsQueryParams = Partial<GetAnilibriaSeedStatsQueries>;
export interface GetAnilibriaSeedStatsReturn {
    downloaded: number;
    uploaded: number;
    user: string;
}
export {};
