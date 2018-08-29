'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + "/index";
        const pageResult = await ctx.curl(apiPath);
        ctx.helper.checkSuccess(pageResult);
        await ctx.render("/index", {
            data: pageResult.data.data
        })
    }
}

module.exports = HomeController;
