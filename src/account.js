"use strict"

const constants = require('./constants');

module.exports = (apiClient) => {

    /**
     * Current Namespace for calling contact apis
     *
     * @type String
     */
    const namespace = 'account';

    /**
     * Add or update cost center
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const addOrUpdateCostCenter = (params) => {
        return apiClient.request(namespace, 'addOrUpdateCostCenter', params);
    }

    /**
     * Fetches cost centers list
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getCostCenterList = (params) => {
        return apiClient.request(namespace, 'getCostCenterList', params);
    }

    /**
     * Fetches emails logs for an account
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getEmailLogList = (params) => {
        return apiClient.request(namespace, 'getEmailLogList', params);
    }

    /**
     * Fetches email campaigns
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getEmailCampaignList = (params) => {
        return apiClient.request(namespace, 'getEmailCampaignList', params);
    }

    /**
     * Fetches email campaign recipients
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const getEmailCampaignRecipientList = (params) => {
        return apiClient.request(namespace, 'getEmailCampaignRecipientList', params);
    }

    return {
        addOrUpdateCostCenter: addOrUpdateCostCenter,
        getCostCenterList: getCostCenterList,
        getEmailLogList: getEmailLogList,
        getEmailCampaignList: getEmailCampaignList,
        getEmailCampaignRecipientList: getEmailCampaignRecipientList
    };
};
