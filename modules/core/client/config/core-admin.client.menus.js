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

    // Add the portfolio menu item
    Menus.addMenuItem('topbar', {
      title: 'Portfolio',
      state: 'portfolio.list',
      roles: ['*']
    });

    // Add the portfolio menu item
    Menus.addMenuItem('topbar', {
      title: 'Experience',
      state: 'experience.list',
      roles: ['*']
    });

    // // Add the articles menu item
    // Menus.addMenuItem('topbar', {
    //   title: 'Articles',
    //   state: 'articles.list',
    //   roles: ['*']
    // });

    // Add the articles menu item
    Menus.addMenuItem('topbar', {
      title: 'Contact',
      state: 'contact',
      roles: ['*']
    });

    Menus.addMenuItem('topbar', {
      title: 'Admin',
      state: 'admin.users',
      // type: 'dropdown',
      roles: ['admin']
    });
  }
]);


// 'use strict';
//
// angular.module('core.admin').run(['Menus',
//   function (Menus) {
//     Menus.addMenuItem('topbar', {
//       title: 'Admin',
//       state: 'admin.users',
//       // type: 'dropdown',
//       roles: ['admin']
//     });
//   }
// ]);
//
