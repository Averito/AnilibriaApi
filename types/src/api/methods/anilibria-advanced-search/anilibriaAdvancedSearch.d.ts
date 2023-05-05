import { Title } from '../../types';
import { AnilibriaAdvancedSearchQueryParams } from './anilibriaAdvancedSearch.types';
export declare const anilibriaAdvancedSearch: (params: AnilibriaAdvancedSearchQueryParams) => Promise<import("../../../utils/get-anilibria-data").GetDataReturn<Title[]>>;
