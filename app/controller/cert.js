'use strict';

const Controller = require('egg').Controller;

class CertController extends Controller {
    async search() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath);
        ctx.helper.checkSuccess(pageResult);
        ctx.body = pageResult.data;
    }

    async detail() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath);
        ctx.helper.checkSuccess(pageResult);
        await ctx.render(ctx.request.path, {
            apiBaseUrl:that.config.apiBaseUrl,
            data: pageResult.data.data
        })
    }
}

module.exports = CertController;
