"use strict"

const constants = require('./constants');

module.exports = (apiClient) => {
    /**
     * Current Namespace for calling batch apis
     *
     * @type String
     */
    const namespace = 'batch';

    /**
     * Runs all provides jobs
     *
     * @param {Object} params See iVvy Api Document for parameters
     * @returns {unresolved}
     */
    const run = (params) => {
        return apiClient.request(namespace, 'run', params);
    };

    /**
     * Returns async progress status
     *
     * @param {String} asyncId
     * @returns {unresolved}
     */
    const progress = (asyncId) => {
        const params = { async: asyncId };
        return apiClient.request(namespace, 'run', params);
    };

    return {
        run: run,
        progress: progress
    };
};
