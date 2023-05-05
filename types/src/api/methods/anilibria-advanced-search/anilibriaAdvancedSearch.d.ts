import { Title } from '@api/types';
import { AnilibriaAdvancedSearchQueryParams } from './anilibriaAdvancedSearch.types';
export declare const anilibriaAdvancedSearch: (params: AnilibriaAdvancedSearchQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
