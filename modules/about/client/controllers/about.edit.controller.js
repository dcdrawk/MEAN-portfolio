(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutEditController', AboutEditController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutEditController($location, $state, Authentication, About, $scope) {
    var vm = this;
    vm.authentication = Authentication;
    vm.about = About;
    // vm.about.position = parseInt(vm.about.position);
    // Update existing Article
    vm.update = function(isValid) {
      // console.log('dwjiaodjiaod');
      vm.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'aboutForm');
        return false;
      }

      var about = vm.about;

      About.$update(function() {
        $state.go('about.list');
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    vm.cancel = function() {
      $state.go('about.list');
    };
  }
})();
