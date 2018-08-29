'use strict';

module.exports = appInfo => {
    const config = exports = {};
    config.onerror= {
        errorPageUrl: '/static/notFound',
    }
    config.notfound= {
        pageUrl: '/static/notFound',
    }
    config.apiBaseUrl = "http://admin.shichangzhixu.com/api";

    return config;
};