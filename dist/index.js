'use strict';

var axios = require('axios');

const ANILIBRIA_API_URI_BY_DEFAULT = 'https://api.anilibria.tv/v2';

const queryParamsString = (queryParamsObject) => {
    const stringQueryParamsObject = {};
    const queryString = new URLSearchParams();
    for (const key in queryParamsObject) {
        stringQueryParamsObject[key] = String(queryParamsObject[key]).split(',');
        queryString.set(key, stringQueryParamsObject[key].join(','));
    }
    return `${queryString.toString().length > 0 ? '?' : ''}${queryString.toString()}`;
};

const getAnilibriaData = async (method, queryParams = {}, axiosInstance = axios) => {
    try {
        const url = ANILIBRIA_API_URI_BY_DEFAULT + method + queryParamsString(queryParams);
        const response = await axiosInstance.get(url);
        return {
            data: response.data,
            url: {
                full: url,
                queryParams,
                anilibriaMethod: method
            }
        };
    }
    catch (error) {
        throw error;
    }
};

class Anilibria {
    _url = ANILIBRIA_API_URI_BY_DEFAULT;
    get url() {
        return this._url;
    }
    set url(newUrl) {
        if (newUrl.endsWith('/')) {
            this._url = newUrl.slice(0, newUrl.length - 1);
            return;
        }
        this._url = newUrl;
    }
    _axiosInstance = axios;
    constructor(options = {}) {
        if (options.url)
            this.url = options.url;
        if (options.axiosOptions)
            this._axiosInstance = axios.create(options.axiosOptions);
    }
    async getAnilibriaTitle(params = {}) {
        try {
            return await getAnilibriaData('/getTitle', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaTitles(params = {}) {
        try {
            return await getAnilibriaData('/getTitles', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaUpdates(params = {}) {
        try {
            return await getAnilibriaData('/getUpdates', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaChanges(params = {}) {
        try {
            return await getAnilibriaData('/getChanges', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaSchedule(params = {}) {
        try {
            return await getAnilibriaData('/getSchedule', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaRandomTitle(params = {}) {
        try {
            return await getAnilibriaData('/getRandomTitle', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaYouTube(params = {}) {
        try {
            return await getAnilibriaData('/getYouTube', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaFeed(params = {}) {
        try {
            return await getAnilibriaData('/getFeed', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaYears() {
        try {
            return await getAnilibriaData('/getYears', {}, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaGenres() {
        try {
            return await getAnilibriaData('/getGenres', {}, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaCachingNodes() {
        try {
            return await getAnilibriaData('/getCachingNodes', {}, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaTeam() {
        try {
            return await getAnilibriaData('/getTeam', {}, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaSeedStats(params = {}) {
        try {
            return await getAnilibriaData('/getSeedStats', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async getAnilibriaRss(params = {}) {
        try {
            return await getAnilibriaData('/getRSS', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async anilibriaSearchTitles(params = {}) {
        try {
            return await getAnilibriaData('/searchTitles', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
    async anilibriaAdvancedSearch(params) {
        try {
            return await getAnilibriaData('/advancedSearch', params, this._axiosInstance);
        }
        catch (error) {
            throw error;
        }
    }
}

const getAnilibriaTitle = async (params = {}) => {
    try {
        return await getAnilibriaData('/getTitle', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaTitles = async (params = {}) => {
    try {
        return await getAnilibriaData('/getTitles', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaUpdates = async (params = {}) => {
    try {
        return await getAnilibriaData('/getRandomTitle', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaChanges = async (params = {}) => {
    try {
        return await getAnilibriaData('/getChanges', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaSchedule = async (params = {}) => {
    try {
        return await getAnilibriaData('/getSchedule', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaCachingNodes = async () => {
    try {
        return await getAnilibriaData('/getCachingNodes');
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaRandomTitle = async (params = {}) => {
    try {
        return await getAnilibriaData('/getRandomTitle', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaYouTube = async (params = {}) => {
    try {
        return await getAnilibriaData('/getYouTube', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaFeed = async (params = {}) => {
    try {
        return await getAnilibriaData('/getFeed', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaYears = async () => {
    try {
        return await getAnilibriaData('/getYears');
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaGenres = async (params = {}) => {
    try {
        return await getAnilibriaData('/getGenres', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaTeam = async () => {
    try {
        return await getAnilibriaData('/getTeam');
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaSeedStats = async (params = {}) => {
    try {
        return await getAnilibriaData('/getSeedStats', params);
    }
    catch (error) {
        throw error;
    }
};

const getAnilibriaRss = async (params = {}) => {
    try {
        return await getAnilibriaData('/getRSS', params);
    }
    catch (error) {
        throw error;
    }
};

const anilibriaSearchTitles = async (params = {}) => {
    try {
        return await getAnilibriaData('/searchTitles', params);
    }
    catch (error) {
        throw error;
    }
};

const anilibriaAdvancedSearch = async (params) => {
    try {
        return await getAnilibriaData('/advancedSearch', params);
    }
    catch (error) {
        throw error;
    }
};

exports.ANILIBRIA_API_URI_BY_DEFAULT = ANILIBRIA_API_URI_BY_DEFAULT;
exports.Anilibria = Anilibria;
exports.anilibriaAdvancedSearch = anilibriaAdvancedSearch;
exports.anilibriaSearchTitles = anilibriaSearchTitles;
exports.getAnilibriaCachingNodes = getAnilibriaCachingNodes;
exports.getAnilibriaChanges = getAnilibriaChanges;
exports.getAnilibriaFeed = getAnilibriaFeed;
exports.getAnilibriaGenres = getAnilibriaGenres;
exports.getAnilibriaRandomTitle = getAnilibriaRandomTitle;
exports.getAnilibriaRss = getAnilibriaRss;
exports.getAnilibriaSchedule = getAnilibriaSchedule;
exports.getAnilibriaSeedStats = getAnilibriaSeedStats;
exports.getAnilibriaTeam = getAnilibriaTeam;
exports.getAnilibriaTitle = getAnilibriaTitle;
exports.getAnilibriaTitles = getAnilibriaTitles;
exports.getAnilibriaUpdates = getAnilibriaUpdates;
exports.getAnilibriaYears = getAnilibriaYears;
exports.getAnilibriaYouTube = getAnilibriaYouTube;
//# sourceMappingURL=index.js.map
