'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('portfolio').factory('Portfolio', ['$resource',
  function ($resource) {
    return $resource('api/portfolio/:portfolioId', {
      portfolioId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);


// (function() {
//   'use strict';
//
//   angular
//     .module('portfolio')
//     .factory('portfolioService', portfolioService);
//
//   // factory.$inject = ['dependencies'];
//
//   /* @ngInject */
//   function portfolioService($resource) {
//     var service = {
//       getPortfolio: getPortfolio
//     };
//
//     return service;
//
//     function getPortfolio() {
//       console.log('testsetestsetset');
//       $resource('api/portfolio/:portfolioId', {
//         articleId: '@_id'
//       }, {
//         update: {
//           method: 'PUT'
//         }
//       });
//     }
//
//     // function ($resource) {
//     //   return $resource('api/articles/:articleId', {
//     //     articleId: '@_id'
//     //   }, {
//     //     update: {
//     //       method: 'PUT'
//     //     }
//     //   });
//     // }
//   }
// })();
