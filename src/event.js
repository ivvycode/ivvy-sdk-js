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

    /**
     * Fetches List of Events
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getEventList = (params) => {
        return apiClient.request(namespace, 'getEventList', params);
    }

    /**
     * Fetches List of Registrations
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getRegistrationList = (params) => {
        return apiClient.request(namespace, 'getRegistrationList', params);
    }

    /**
     * Fetches List of Attendees
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getAttendeeList = (params) => {
        return apiClient.request(namespace, 'getAttendeeList', params);
    }

    return {
        addOrUpdateEvent : addOrUpdateEvent,
        getEventList: getEventList,
        getRegistrationList: getRegistrationList,
        getAttendeeList: getAttendeeList
    };
};
