'use strict';

// Setting up route
angular.module('portfolio').config(['$stateProvider',
  function($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('portfolio', {
        abstract: true,
        url: '/portfolio',
        template: '<ui-view/>'
      })
      .state('portfolio.list', {
        url: '',
        templateUrl: 'modules/portfolio/client/views/portfolio.list.html',
        controller: 'PortfolioListController',
        controllerAs: 'vm',
        resolve: {
          portfolioList: function(Portfolio) {
            return Portfolio.query().$promise;
          }
        }
      })
      .state('portfolio.create', {
        url: '/create',
        templateUrl: 'modules/portfolio/client/views/portfolio.create.html',
        controller: 'PortfolioController',
        controllerAs: 'vm'
      })
      .state('portfolio.view', {
        url: '/:portfolioId',
        templateUrl: 'modules/portfolio/client/views/portfolio.view.html',
        controller: 'PortfolioViewController',
        controllerAs: 'vm',
        resolve: {
          portfolio: function($stateParams, Portfolio) {
            return Portfolio.get({
              portfolioId: $stateParams.portfolioId
            }).$promise;
          }
        }
      })
      .state('portfolio.edit', {
        url: '/:portfolioId/edit',
        templateUrl: 'modules/portfolio/client/views/portfolio.edit.html',
        controller: 'PortfolioEditController',
        controllerAs: 'vm',
        resolve: {
          portfolio: function($stateParams, Portfolio) {
            return Portfolio.get({
              portfolioId: $stateParams.portfolioId
            }).$promise;
          }
        }
      });
  }
]);
