(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioCreateController', PortfolioCreateController);

  // PortfolioController.$inject = ['dependencies'];

  /* @ngInject */
  function PortfolioCreateController($location, Authentication, Portfolio) {
    var vm = this;
    vm.authentication = Authentication;
    vm.test = 'test';
    vm.portfolio = {};
    vm.portfolio.roles = [];
    vm.portfolio.tags = [];
    
    vm.create = function (isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Portfolio object
      // var portfolio = new Portfolio({
      //   title: vm.title,
      //   content: vm.content,
      //
      // });

      var portfolio = new Portfolio(vm.portfolio);

      // Redirect after save
      portfolio.$save(function (response) {
        $location.path('portfolio/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

  }
})();
