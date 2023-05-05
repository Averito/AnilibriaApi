import { GetAnilibriaUpdatesQueryParams } from '@api/methods/get-anilibria-updates/getAnilibriaUpdates.types';
import { Title } from '@api/types';
export declare const getAnilibriaUpdates: (params?: GetAnilibriaUpdatesQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
