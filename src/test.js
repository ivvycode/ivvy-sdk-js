"use strict"

const constants = require('./constants');

module.exports = (apiClient) => {

    /**
     * Current Namespace for calling ping
     *
     * @type String
     */
    const namespace = 'test';

    /**
     * Test the access to ivvy api
     *
     * @returns {unresolved}
     */
    const ping = () => {
        return apiClient.request(namespace, 'ping', '');
    }

    return {
        ping : ping,
    };
};
