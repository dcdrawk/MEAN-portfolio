(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutListController', AboutListController);

  // aboutController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutListController($location, Authentication, aboutList, About, $timeout) {
    var vm = this;
    vm.authentication = Authentication;
    vm.aboutList = aboutList;

    vm.create = function(isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new About object
      var about = new About({
        position: vm.position,
        company: vm.company,
        date: vm.date,
        role: vm.role,
        result: vm.result,
      });

      // Redirect after save
      About.$save(function(response) {
        $location.path('about/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

  }
})();
