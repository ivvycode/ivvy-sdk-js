"use strict"

const constants = require('./constants');

module.exports = (apiClient) => {
    /**
     * Current Namespace for calling venue apis
     *
     * @type String
     */
    const namespace = 'venue';

    /**
     * Fetches Venue by Id
     *
     * @param {Integer} id
     * @returns {unresolved}
     */
    const getVenue = (id) => {
        if (!id) {
            throw new Error(constants.ERR_INVALID_PARAMS);
        }
        const requestParams = { id };
        return apiClient.request(namespace, 'getVenue', requestParams);
    };

    /**
     * Fetches venues list
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getVenueList = (params) => {
        const requestParams = params;
        return apiClient.request(namespace, 'getVenueList', requestParams);
    };

    return {
        getVenue : getVenue,
        getVenueList : getVenueList,
    };
};
