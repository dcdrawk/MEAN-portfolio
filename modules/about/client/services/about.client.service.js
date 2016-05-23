'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('about').factory('About', ['$resource',
  function ($resource) {
    return $resource('api/about/:aboutId', {
      aboutId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
