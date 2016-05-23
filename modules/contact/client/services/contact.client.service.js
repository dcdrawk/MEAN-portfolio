'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('contact').factory('Contact', ['$resource',
  function ($resource) {
    return $resource('api/contact/:contactId', {
      contactId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
