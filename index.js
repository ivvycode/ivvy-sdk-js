"use strict";

module.exports = (config) => {
    const apiClient = require('./src/iVvyApi')(config);
    return {
        venue : require('./src/venue')(apiClient),
        batch : require('./src/batch')(apiClient)
    };
};
