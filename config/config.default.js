'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1530330734105_4478';

    // add your config here
    config.middleware = [];
    config.session = {
        key: 'GWHGW',
        maxAge: 2 * 3600 * 1000, // 2小时
        httpOnly: true,
        encrypt: true,
    }
    config.view = {
        defaultViewEngine: 'nunjucks'
    }
    config.httpclient = {
        request: {
            headers: {
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                "Accept":"application/json",
                'X-Requested-With': 'XMLHttpRequest',
            },
            dataType: 'json'
        }
    }
    config.apiBaseUrl = "http://gwhtest.madonghua.com/api";
    // config.apiBaseUrl = "http://localhost:8080/api";
    config.tokenKey = "gwhddlxx";
    return config;
};