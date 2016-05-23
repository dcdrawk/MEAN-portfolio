'use strict';

// Setting up route
angular.module('experience').config(['$stateProvider',
  function($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('experience', {
        abstract: true,
        url: '/experience',
        template: '<ui-view/>'
      })
      .state('experience.list', {
        url: '',
        templateUrl: 'modules/experience/client/views/experience.list.html',
        controller: 'ExperienceListController',
        controllerAs: 'vm',
        resolve: {
          experienceList: function(Experience) {
            return Experience.query().$promise;
          }
        }
      })
      .state('experience.create', {
        url: '/create',
        templateUrl: 'modules/experience/client/views/experience.create.html',
        controller: 'ExperienceCreateController',
        controllerAs: 'vm'
      })
      .state('experience.view', {
        url: '/:experienceId',
        templateUrl: 'modules/experience/client/views/experience.view.html',
        controller: 'ExperienceViewController',
        controllerAs: 'vm',
        resolve: {
          experience: function($stateParams, Experience) {
            return Experience.get({
              experienceId: $stateParams.experienceId
            }).$promise;
          }
        }
      })
      .state('experience.edit', {
        url: '/:experienceId/edit',
        templateUrl: 'modules/experience/client/views/experience.edit.html',
        controller: 'ExperienceEditController',
        controllerAs: 'vm',
        resolve: {
          experience: function($stateParams, Experience) {
            return Experience.get({
              experienceId: $stateParams.experienceId
            }).$promise;
          }
        }
      });
  }
]);
