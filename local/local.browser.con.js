const config = require('../wdio.conf').config;

exports.config = {
    ...config,
    capabilities: [
        {
            browserName: 'chrome'
        },
        {
            browserName: 'edge'
        }
    ]
};
