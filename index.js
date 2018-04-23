"use strict";

module.exports = (config) => {
    const apiClient = require('./src/iVvyApi')(config);
    return {
        batch : require('./src/batch')(apiClient),
        event : require('./src/event')(apiClient),
        test  : require('./src/test')(apiClient),
        venue : require('./src/venue')(apiClient),
        contact : require('./src/contact')(apiClient)
    };
};
