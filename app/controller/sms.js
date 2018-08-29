'use strict';

const Controller = require('egg').Controller;

class SMSController extends Controller {
  async send() {
      const ctx = this.ctx;
      const apiPath = this.config.apiBaseUrl + ctx.request.url;
      const pageResult = await ctx.curl(apiPath);
      ctx.helper.checkSuccess(pageResult);
      ctx.body = pageResult.data;
  }
}

module.exports = SMSController;
