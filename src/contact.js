"use strict"

const constants = require('./constants');

module.exports = (apiClient) => {

    /**
     * Current Namespace for calling contact apis
     *
     * @type String
     */
    const namespace = 'contact';

    /**
     * Fetches contact list
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getContactList = (params) => {
        return apiClient.request(namespace, 'getContactList', params);
    }

    /**
     * Fetches subscription groups list
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getSubscriptionGroupList = (params) => {
        return apiClient.request(namespace, 'getSubscriptionGroupList', params);
    }

    return {
        getContactList: getContactList,
        getSubscriptionGroupList: getSubscriptionGroupList
    };
};
