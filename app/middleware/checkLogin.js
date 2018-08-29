module.exports = options => {
    return async function checkLogin(ctx, next) {
        if (!ctx.session.loginUser) {
            ctx.session.referrer = ctx.request.url;
            ctx.redirect("/member/login");
            return;
        }
        await next();
    }
}