import axios, { AxiosInstance, AxiosStatic } from 'axios'

import {
	QueryObject,
	queryParamsString
} from '../../helpers/query-params-string'
import { ANILIBRIA_API_URI_BY_DEFAULT } from '../../api/anilibria.config.js'
import { GetDataReturn } from './getAnilibriaData.types'

export const getAnilibriaData = async <T>(
	method: string,
	queryParams: QueryObject = {},
	axiosInstance: AxiosStatic | AxiosInstance = axios
): Promise<GetDataReturn<T>> => {
	try {
		const url =
			ANILIBRIA_API_URI_BY_DEFAULT + method + queryParamsString(queryParams)
		const response = await axiosInstance.get<T>(url)

		return {
			data: response.data,
			url: {
				full: url,
				queryParams,
				anilibriaMethod: method
			}
		}
	} catch (error) {
		throw error
	}
}
