import { GeneralQueryObjectParams, Include, DescriptionType } from '../types';
interface GetAnilibriaChangesQueries extends GeneralQueryObjectParams {
    include: Include;
    limit: number;
    after: number;
    since: number;
    description_type: DescriptionType;
}
export type GetAnilibriaChangesQueryParams = Partial<GetAnilibriaChangesQueries>;
export {};
