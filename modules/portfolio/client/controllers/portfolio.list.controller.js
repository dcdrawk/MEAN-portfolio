(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioListController', PortfolioListController);

  // PortfolioController.$inject = ['dependencies'];

  /* @ngInject */
  function PortfolioListController($location, Authentication, portfolioList, Portfolio, $timeout) {
    var vm = this;
    vm.authentication = Authentication;
    vm.portfolioList = portfolioList;

    $timeout(function() {
      vm.doneTransition = true;
    }, 500)

    vm.create = function (isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Portfolio object
      var portfolio = new Portfolio({
        title: vm.title,
        content: vm.content
      });

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
