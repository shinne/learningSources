/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554793998695_374';

  // add your middleware config here
  config.middleware = [
    'robot',
  ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  const view = {
    defaultViewEngins: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 20,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.robot = {
    ua: [
      /* /curl/i,*/
      /Baiduspider/i,
    ],
  };

  return {
    ...config,
    ...userConfig,
    view,
  };
};
