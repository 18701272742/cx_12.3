'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/list',controller.user.finds)
  router.post('/sousuo',controller.user.sousuo)
  // router.post('/api/login',controller.user.login)
};
