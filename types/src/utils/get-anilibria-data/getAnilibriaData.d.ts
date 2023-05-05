import { AxiosInstance, AxiosStatic } from 'axios';
import { QueryObject } from '../../helpers/query-params-string';
import { GetDataReturn } from './getAnilibriaData.types';
export declare const getAnilibriaData: <T>(method: string, queryParams?: QueryObject, axiosInstance?: AxiosStatic | AxiosInstance) => Promise<GetDataReturn<T>>;
