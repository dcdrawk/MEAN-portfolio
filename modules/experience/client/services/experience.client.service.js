'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('experience').factory('Experience', ['$resource',
  function ($resource) {
    return $resource('api/experience/:experienceId', {
      experienceId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
