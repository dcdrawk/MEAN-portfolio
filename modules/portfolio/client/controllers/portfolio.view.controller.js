(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('PortfolioViewController', PortfolioViewController);

  // PortfolioViewController.$inject = ['dependencies'];

  /* @ngInject */
  function PortfolioViewController($location, $state, Authentication, portfolio, $sce) {
    var vm = this;
    vm.authentication = Authentication;
    portfolio.content = $sce.trustAsHtml(portfolio.content);
    vm.portfolio = portfolio;

    // Edit existing portfolio
    vm.edit = function(portfolio) {
      $state.go('portfolio.edit', {
        'portfolioId': portfolio._id
      });
    };

    // Remove existing portfolio
    vm.remove = function(portfolio) {
      vm.portfolio.$remove(function() {
        $location.path('portfolio');
      });
    };
  }
})();
