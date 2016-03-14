(function() {
  'use strict';

  angular
    .module('experience')
    .controller('ExperienceCreateController', ExperienceCreateController);

  // ExperienceController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceCreateController($location, Authentication, Experience) {
    var vm = this;
    vm.authentication = Authentication;
    vm.experience = {};

    vm.create = function (isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Experience object
      // var experience = new Experience({
      //   title: vm.title,
      //   content: vm.content,
      //
      // });

      var experience = new Experience(vm.experience);

      // Redirect after save
      experience.$save(function (response) {
        $location.path('experience/' + response._id);

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
