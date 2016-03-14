(function() {
  'use strict';

  angular
    .module('experience')
    .controller('ExperienceEditController', ExperienceEditController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceEditController($location, $state, Authentication, experience, $scope) {
    var vm = this;
    vm.authentication = Authentication;
    vm.experience = experience;
    // vm.experience.position = parseInt(vm.experience.position);
    // Update existing Article
    vm.update = function(isValid) {
      // console.log('dwjiaodjiaod');
      vm.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'experienceForm');
        return false;
      }

      var experience = vm.experience;

      experience.$update(function() {
        $location.path('experience/' + experience._id);
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    vm.cancel = function() {
      $state.go('experience.list');
    };
  }
})();
