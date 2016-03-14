(function() {
  'use strict';

  angular
    .module('experience')
    .controller('ExperienceController', ExperienceController);

  // ExperienceController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceController($location, Authentication, Experience) {
    var vm = this;
    vm.authentication = Authentication;
    vm.test = 'test';

    vm.create = function (isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Experience object
      var experience = new Experience({
        title: vm.title,
        content: vm.content
      });

      // Redirect after save
      experience.$save(function (response) {
        $location.path('experience/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    activate();

    function activate() {
      vm.experienceList = Experience.query();
    }
  }
})();
