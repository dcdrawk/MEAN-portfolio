(function() {
  'use strict';

  angular
    .module('contact')
    .controller('ContactEditController', ContactEditController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactEditController($location, $state, Authentication, contact, $scope) {
    var vm = this;
    vm.authentication = Authentication;
    vm.contact = contact;
    // vm.contact.position = parseInt(vm.contact.position);
    // Update existing Article
    vm.update = function(isValid) {
      // console.log('dwjiaodjiaod');
      vm.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'contactForm');
        return false;
      }

      var contact = vm.contact;

      contact.$update(function() {
        $state.go('contact');
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    vm.cancel = function() {
      $state.go('contact');
    };
  }
})();
