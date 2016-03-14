(function() {
  'use strict';

  angular
    .module('experience')
    .controller('ExperienceListController', ExperienceListController);

  // ExperienceController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceListController($location, Authentication, experienceList, Experience, $timeout) {
    var vm = this;
    vm.authentication = Authentication;
    vm.experienceList = experienceList;

    vm.create = function(isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Experience object
      var experience = new Experience({
        position: vm.position,
        company: vm.company,
        date: vm.date,
        role: vm.role,
        result: vm.result,
      });

      // Redirect after save
      experience.$save(function(response) {
        $location.path('experience/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

  }
})();
