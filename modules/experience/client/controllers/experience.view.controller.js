(function() {
  'use strict';

  angular
    .module('experience')
    .controller('ExperienceViewController', ExperienceViewController);

  // ExperienceViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceViewController($location, $state, Authentication, experience, $sce) {
    var vm = this;
    vm.authentication = Authentication;
    experience.content = $sce.trustAsHtml(experience.content);
    vm.experience = experience;

    // Edit existing experience
    vm.edit = function(experience) {
      $state.go('experience.edit', {
        'experienceId': experience._id
      });
    };

    // Remove existing experience
    vm.remove = function(experience) {
      vm.experience.$remove(function() {
        $location.path('experience');
      });
    };
  }
})();
