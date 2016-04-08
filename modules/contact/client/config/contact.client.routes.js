'use strict';

// Setting up route
angular.module('contact').config(['$stateProvider',
  function($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('contact', {
        // abstract: true,
        url: '/contact',
        templateUrl: 'modules/contact/client/views/contact.view.html',
        controller: 'ContactViewController',
        controllerAs: 'vm',
        resolve: {
          contactList: function(Contact) {
            return Contact.query().$promise;
          }
        }
      })
      .state('contact-create', {
        url: '/contact/create',
        // templateUrl: 'modules/contact/client/views/contact.create.html',
        templateUrl: 'modules/contact/client/views/contact.create.html',
        controller: 'ContactCreateController',
        controllerAs: 'vm'
      })
      .state('contact-edit', {
        url: '/contact/edit/:contactId',
        // templateUrl: 'modules/contact/client/views/contact.create.html',
        templateUrl: 'modules/contact/client/views/contact.edit.html',
        controller: 'ContactEditController',
        controllerAs: 'vm',
        resolve: {
          contact: function($stateParams, Contact) {
            console.log($stateParams);
            return Contact.get({
              contactId: $stateParams.contactId
            }).$promise;
          }
        }
      });
  }
]);
