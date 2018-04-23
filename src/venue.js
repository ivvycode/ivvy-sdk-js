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
        return apiClient.request(namespace, 'getVenueList', params);
    };

    /**
     * Add or Updates the room count for distribution channel if venue has distribution channel
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const addOrUpdateRoomCounts = (params) => {
        return apiClient.request(namespace, 'addOrUpdateRoomCounts', params);
    }

    /**
     * Add or Updates bar's booking rules for the distribution channel if venue has distribution channel
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const addOrUpdateRatePlanBookingRules = (params) => {
        return apiClient.request(namespace, 'addOrUpdateRatePlanBookingRules', params);
    }

    /**
     * Add or Updates the room dymanic rates for the distribution channel if venue has distribution channel
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const addOrUpdateRoomDynamicRates = (params) => {
        return apiClient.request(namespace, 'addOrUpdateRoomDynamicRates', params);
    }

    /**
     * Removes room's dynamic rates
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const removeRoomDynamicRates = (params) => {
        return apiClient.request(namespace, 'removeRoomDynamicRates', params);
    }

    /**
     * Fetches contact list
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getContactList = (params) => {
        return apiClient.request(namespace, 'getContactList', params);
    }

    return {
        getVenue : getVenue,
        getVenueList : getVenueList,
        addOrUpdateRoomCounts : addOrUpdateRoomCounts,
        addOrUpdateRatePlanBookingRules: addOrUpdateRatePlanBookingRules,
        addOrUpdateRoomDynamicRates: addOrUpdateRoomDynamicRates,
        getContactList: getContactList
    };
};
