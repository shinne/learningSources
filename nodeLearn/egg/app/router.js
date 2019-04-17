'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user/detail', controller.user.detail);
  router.get('/user/add/:name', controller.user.add);
  router.get('/user/remove', controller.user.remove);
};
