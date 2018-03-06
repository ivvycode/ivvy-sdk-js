
/**
 * Include required third party modules
 */
const S = require('string');
const moment = require('moment');
const isObject = require('isobject');
const cryptoJS = require("crypto-js");
const superagent = require('superagent');

/**
 * Include constants
 */
const constants = require('./constants');

/**
 * Regions List
 */
const regionEndPoints = {
    AU : 'api.ap-southeast-2.ivvy.com',
    UK : 'api.eu-west-2.ivvy.com',
    US : 'api.us-west-2.ivvy.com'
};

module.exports = (params) => {
    const key = params.key;
    const secret = params.secret;
    const region = params.region || 'AU';

    // Throw an error if there is no key and secret set
    if (!key || !secret) {
        throw new Error(constants.ERR_INVALID_KEY_SECRET);
    }

    /**
     * Returns default endpoint based on results
     *
     * @param {String} region REGION_*
     * @returns {nm$_iVvyApi.regionEndPoints|String}
     */
    const getDefaultEndpoint = region => {
        return regionEndPoints[region] || 'https://api.ap-southeast-2.ivvy.com/';
    };

    const url = params.url || getDefaultEndpoint(region);
    const version = params.version || '1.0';
    const contentType = params.contentType || 'application/json';
    const method = params.method || 'POST';

    /**
     * Prepare request object that can be sent. This function is used by all Api actions
     *
     * @param {type} namespace
     * @param {type} action
     * @param {type} body
     * @returns {unresolved}
     */
    const request = (namespace, action, body) => {
        const rawBody = isObject(body) ? JSON.stringify(body) : body;
        const requestStr = '/api/' + version + '/' + namespace + '?action=' + action;
        const bodyMd5 = cryptoJS.MD5(rawBody);
        const currentDate = moment.utc().format('YYYY-MM-DD HH:mm:ss');
        const stringToSign = method
            + bodyMd5
            + contentType
            + '' // Date (using IVVY-Date header instead)
            + requestStr
            + version
            + 'ivvydate=' + currentDate;
        const signature = cryptoJS.HmacSHA1(stringToSign.toLowerCase(), secret);

        // Return the super agent object
        return superagent
            .post(S(url).stripRight('/').s + requestStr)
            .send(rawBody) // sends a JSON post body
            .set('Content-Type', contentType)
            .set('Content-MD5', bodyMd5)
            .set('IVVY-Date', currentDate)
            .set('X-Api-Version', version)
            .set('X-Api-Authorization', 'IWS ' + key + ':' + signature);
    };

    return {
        request,
    };
};