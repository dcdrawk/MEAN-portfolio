(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutCreateController', AboutCreateController);

  // aboutController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutCreateController($location, Authentication, About) {
    var vm = this;
    vm.authentication = Authentication;
    vm.about = {};

    vm.create = function (isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new About object
      // var about = new About({
      //   title: vm.title,
      //   content: vm.content,
      //
      // });

      var about = new About(vm.about);

      // Redirect after save
      about.$save(function (response) {
        $location.path('about/' + response._id);

        // Clear form fields
        vm.position = '';
        vm.company = '';
        vm.date = '';
        vm.role = '';
        vm.result = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

  }
})();
