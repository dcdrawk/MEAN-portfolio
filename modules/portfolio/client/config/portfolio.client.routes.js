'use strict';

// Setting up route
angular.module('portfolio').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('portfolio', {
        abstract: true,
        url: '/portfolio',
        template: '<ui-view/>'
      })
      .state('portfolio.list', {
        url: '',
        templateUrl: 'modules/portfolio/client/views/list.html',
        controller: 'PortfolioController',
        controllerAs: 'vm'
      })
      .state('portfolio.create', {
        url: '/create',
        templateUrl: 'modules/portfolio/client/views/create.html',
        controller: 'PortfolioController',
        controllerAs: 'vm'
      });
  }
]);
