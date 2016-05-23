'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/client/views/home.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm',
        resolve: {
          aboutInfo: function (About) {
            // console.log(Experience);
            return About.query('56f2345454ec4cf5b54643fa').$promise;
            // Experience.query().then(function(result){
            //   return result;
            // });
          }
        }
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/client/views/404.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Not-Found'
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: 'modules/core/client/views/400.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Bad-Request'
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'modules/core/client/views/403.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Forbidden'
      })
      .state('full', {
        url: '/full',
        templateUrl: 'modules/core/client/views/full.view.html',
        views: {
          //About
          'about@full': {
            templateUrl: 'modules/core/client/views/home.client.view.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            resolve: {
              aboutInfo: function (About) {
                return About.query('56f2345454ec4cf5b54643fa').$promise;
              }
            }
          },
          //Portfolio
          'portfolio@full': {
            templateUrl: 'modules/portfolio/client/views/portfolio.list.html',
            controller: 'PortfolioListController',
            controllerAs: 'vm',
            resolve: {
              portfolioList: function (dataService) {
                return dataService.get('api/portfolio/typelist').then(function (data) {
                  return data;
                });
              }
            }
          },
          //Experience
          'experience@full': {
            templateUrl: 'modules/experience/client/views/experience.list.html',
            controller: 'ExperienceListController',
            controllerAs: 'vm',
            resolve: {
              experienceList: function (Experience) {
                return Experience.query().$promise;
              }
            }
          },
          //Contact
          'contact@full': {
            templateUrl: 'modules/contact/client/views/contact.view.html',
            controller: 'ContactViewController',
            controllerAs: 'vm',
            resolve: {
              contactList: function(Contact) {
                return Contact.query().$promise;
              }
            }
          },
          '': {
            templateUrl: 'modules/core/client/views/full.view.html'
          }
        }
      });
  }
]);
