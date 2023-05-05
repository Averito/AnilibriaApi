import { QueryObject } from '@helpers/query-params-string';
export interface GetDataReturn<T> {
    url: {
        full: string;
        anilibriaMethod: string;
        queryParams: QueryObject;
    };
    data: T;
}
//# sourceMappingURL=getAnilibriaData.types.d.ts.map