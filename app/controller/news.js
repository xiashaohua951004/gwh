'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath);
        ctx.helper.checkSuccess(pageResult);
        await ctx.render(ctx.request.path, {
            data: pageResult.data.data
        })
    }

    async detail() {
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath);
        ctx.helper.checkSuccess(pageResult);
        await ctx.render(ctx.request.path, {
            data: pageResult.data.data
        })
    }
}

module.exports = NewsController;
