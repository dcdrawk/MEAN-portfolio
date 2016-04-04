//'use strict';
//
//// Setting up route
//angular.module('about').config(['$stateProvider',
//  function($stateProvider) {
//    // Articles state routing
//    $stateProvider
//      .state('about', {
//        abstract: true,
//        url: '/about',
//        template: '<ui-view/>'
//      })
//      .state('about.list', {
//        url: '',
//        templateUrl: 'modules/about/client/views/about.list.html',
//        controller: 'aboutListController',
//        controllerAs: 'vm',
//        resolve: {
//          aboutList: function(about) {
//            return about.query().$promise;
//          }
//        }
//        // resolve: {
//        //   aboutList: function(dataService) {
//        //     return dataService.get('api/about/typelist').then(function(data){
//        //       return data;
//        //     });
//        //   }
//        // }
//      })
//      .state('about.create', {
//        url: '/create',
//        templateUrl: 'modules/about/client/views/about.create.html',
//        controller: 'aboutCreateController',
//        controllerAs: 'vm'
//      })
//      .state('about.view', {
//        url: '/:aboutId',
//        templateUrl: 'modules/about/client/views/about.view.html',
//        controller: 'aboutViewController',
//        controllerAs: 'vm',
//        resolve: {
//          about: function($stateParams, about) {
//            return about.get({
//              aboutId: $stateParams.aboutId
//            }).$promise;
//          }
//        }
//      })
//      .state('about.edit', {
//        url: '/:aboutId/edit',
//        templateUrl: 'modules/about/client/views/about.edit.html',
//        controller: 'aboutEditController',
//        controllerAs: 'vm',
//        resolve: {
//          about: function($stateParams, about) {
//            return about.get({
//              aboutId: $stateParams.aboutId
//            }).$promise;
//          }
//        }
//      });
//  }
//]);
