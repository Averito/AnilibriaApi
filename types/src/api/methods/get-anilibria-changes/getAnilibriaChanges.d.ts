import { GetAnilibriaChangesQueryParams } from './getAnilibriaChanges.types';
import { Title } from '@api/types';
export declare const getAnilibriaChanges: (params?: GetAnilibriaChangesQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
