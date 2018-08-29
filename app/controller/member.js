'use strict';
const ms = require('ms');
const Controller = require('egg').Controller;

class MemberController extends Controller {
    async login() {
        const ctx = this.ctx;
        await ctx.render(ctx.request.path)
    }

    async loginDo() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath, {
            method: "POST",
            data: ctx.request.body
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.code == 200) {
            ctx.session.loginUser = pageResult.data;
            if (ctx.request.body.rememberMe=="true"){
                ctx.session.maxAge = ms('7d');
            }else{
                ctx.session.maxAge = ms('2h');
            }
        }
        ctx.body = {
            code: pageResult.data.code,
            message: pageResult.data.message
        };
    }

    async logout() {
        const ctx = this.ctx;
        ctx.session = null;
        await ctx.redirect("back","/")
    }


    async forget() {
        const ctx = this.ctx;
        await ctx.render(ctx.request.path)
    }

    async forgetDo() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath, {
            method: "POST",
            data: ctx.request.body
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.code == 200) {
            ctx.session.loginUser = pageResult.data;
        }
        ctx.body = {
            code: pageResult.data.code,
            message: pageResult.data.message
        };
    }

    async modiferDo() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        var params = ctx.request.body;
        if (!ctx.session.loginUser) {
            ctx.body = {
                code:403,
                message: "登录超时，请登录后再试！"
            }
            return
        }
        params.token = ctx.session.loginUser.data.token
        const pageResult = await ctx.curl(apiPath, {
            method: "POST",
            data: params
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.data.code == 403) {
            ctx.session = null;
        }
        ctx.body= pageResult.data
    }

    async modifer() {
        var that = this;
        const ctx = that.ctx;
        await ctx.render(ctx.request.url);
    }

    async detail() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath,{
            method: "GET",
            data:{
                token: ctx.session.loginUser.data.token
            }
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.code != 200) {
            ctx.redirect("/member/login");
            return;
        }
        await ctx.render(ctx.request.path,{
            data: pageResult.data.data
        })
    }

    async applicationList() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath,{
            method: "POST",
            data:{
                typeName:ctx.request.query.typeName,
                pageNum:ctx.request.query.pageNum,
                token: ctx.session.loginUser.data.token
            }
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.code != 200) {
            ctx.session = null;
            ctx.redirect("/member/login");
            return;
        }
        await ctx.render(ctx.request.path,{
            typeName:ctx.request.query.typeName||"培训",
            data: pageResult.data.data
        })
    }

    async applicationAdd() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const params = ctx.request.body;
        if (!ctx.session.loginUser) {
            ctx.body = {
                code:403,
                message: "登录超时，请登录后再试！"
            }
        }
        params.token = ctx.session.loginUser.data.token;
        const pageResult = await ctx.curl(apiPath,{
            method: "POST",
            data:params
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.data.code == 403) {
            ctx.session = null;
        }
        ctx.body = pageResult.data;
    }

    async applicationDetail() {
        var that = this;
        const ctx = this.ctx;
        const apiPath = this.config.apiBaseUrl + ctx.request.url;
        const pageResult = await ctx.curl(apiPath,{
            method: "GET",
            data:{
                token: ctx.session.loginUser.data.token
            }
        });
        ctx.helper.checkSuccess(pageResult);
        if (pageResult.data.code != 200) {
            ctx.session = null;
            ctx.redirect("/member/login");
            return;
        }
        await ctx.render(ctx.request.path,{
            typeName:ctx.request.query.typeName,
            data: pageResult.data.data
        })
    }
}

module.exports = MemberController;
