'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

    const {router, controller} = app;
    const checkLogin = app.middleware.checkLogin();
    router.get('/', controller.home.index);
    router.get('/sms/send', controller.sms.send);//?mobile=?
    router.get('/captcha/get', controller.captcha.get);//timespan=时间戳
    router.get('/news/list', controller.news.list);//?pageNum=1&columnId=77：管委会资讯，78：管委会动态，79：政务信息，80：委员会活动，81：红黑榜，82：红榜，83：黑榜，84：会员服务，85：会员单位
    router.get('/news/detail', controller.news.detail);//?id=?
    router.get('/expert/list', controller.expert.list);//?pageNum=1
    router.get('/expert/detail', controller.expert.detail);//?id=?
    router.get('/trainee/list', controller.trainee.list);//?pageNum=1&
    router.get('/trainee/detail', controller.trainee.detail);//?id=?
    router.get('/activity/list', controller.activity.list);//?typeName=（活动、论坛、会议）
    router.get('/activity/detail', controller.activity.detail);//?id=?
    router.get(/^\/static\/[\w-.]+$/, controller.static.index);

    router.get('/member/login', controller.member.login);
    router.get('/member/logout', controller.member.logout);
    router.get('/member/forget', controller.member.forget);
    router.post('/member/forget', controller.member.forgetDo);
    router.get('/member/modifer', checkLogin, controller.member.modifer);
    router.post('/member/modifer', controller.member.modiferDo);
    router.post('/member/login', controller.member.loginDo);
    router.get('/member/detail', checkLogin, controller.member.detail);
    router.get('/member/applicationList', checkLogin, controller.member.applicationList); //?typeName=（活动、论坛、会议）
    router.get('/member/applicationDetail', checkLogin, controller.member.applicationDetail); //?id=?
    router.get('/member/applicationAdd', checkLogin, controller.member.applicationAdd); //?id=?

    router.get('/cert/search', controller.cert.search);//?keyword=?
    router.get('/cert/detail', controller.cert.detail);//?id=?
    
    /*



    router.get('/member/center', controller.member.center);
    router.get('/member/cert', controller.member.cert);//用户基本信息
    router.get('/member/forget', controller.member.forget);//忘记密码
    router.get('/member/modifer', controller.member.modifer);//密码设置
*/
};
