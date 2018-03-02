"use strict"

const constants = require('./constants');

module.exports = (apiClient) => {

    /**
     * Current Namespace for calling event apis
     *
     * @type String
     */
    const namespace = 'event';

    /**
     * Add or Updates a Event in iVvy
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const addOrUpdateEvent = (params) => {
        return apiClient.request(namespace, 'addOrUpdateEvent', params);
    }

    return {
        addOrUpdateEvent : addOrUpdateEvent,
    };
};
