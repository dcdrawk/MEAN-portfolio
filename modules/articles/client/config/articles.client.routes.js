'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('articles.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-articles.client.view.html',
        controller: 'ArticleListController',
        controllerAs: 'vm',
        resolve: {
          articles: function($stateParams, Articles) {
            return Articles.query().$promise;
          }
        }
      })
      .state('articles.create', {
        url: '/create',
        templateUrl: 'modules/articles/client/views/create-article.client.view.html',
        controller: 'ArticleCreateController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/client/views/view-article.client.view.html',
        controller: 'ArticleViewController',
        controllerAs: 'vm',
        resolve: {
          article: function($stateParams, Articles) {
            return Articles.get({ articleId: $stateParams.articleId }).$promise;
          }
        }
      })
      .state('articles.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/client/views/edit-article.client.view.html',
        controller: 'ArticleEditController',
        controllerAs: 'vm',
        resolve: {
          article: function($stateParams, Articles) {
            return Articles.get({ articleId: $stateParams.articleId }).$promise;
          }
        },
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
