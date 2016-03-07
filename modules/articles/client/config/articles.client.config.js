'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {

    // Add the articles menu item
    Menus.addMenuItem('topbar', {
      title: 'Home',
      state: 'home',
      roles: ['*']
    });

    // Add the articles menu item
    Menus.addMenuItem('topbar', {
      title: 'Portfolio',
      state: 'portfolio.list',
      roles: ['*']
    });

    // Add the articles menu item
    Menus.addMenuItem('topbar', {
      title: 'Articles',
      state: 'articles.list',
      roles: ['*']
    });

    // Add the articles menu item
    Menus.addMenuItem('topbar', {
      title: 'Contact',
      state: 'contact',
      roles: ['*']
    });

  }
]);
