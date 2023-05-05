import { GetAnilibriaScheduleQueryParams } from './getAnilibriaSchedule.types';
import { Schedule } from '@api/types';
export declare const getAnilibriaSchedule: (params?: GetAnilibriaScheduleQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Schedule[]>>;
