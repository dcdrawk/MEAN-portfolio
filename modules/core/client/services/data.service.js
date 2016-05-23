(function() {
  'use strict';

  angular
    .module('core')
    .factory('dataService', dataService);

  // portfolioListService.$inject = ['dependencies'];

  /* @ngInject */
  function dataService($http) {
    var service = {
      get: get
    };

    return service;

    function get(apiPath) {
      var config = {};
      return $http.get(apiPath, config).then(function(response){
        return response.data;
      });
    }
  }
})();
