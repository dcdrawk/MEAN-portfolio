'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Admin',
      state: 'admin.users',
      // type: 'dropdown',
      roles: ['admin']
    });
  }
]);
