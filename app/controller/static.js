'use strict';

const Controller = require('egg').Controller;

class StaticController extends Controller {
    async index() {
        const ctx = this.ctx;
        await ctx.render(ctx.request.path)
    }
}

module.exports = StaticController;
