(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutViewController', AboutViewController);

  // aboutViewController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutViewController($location, $state, Authentication, About, $sce) {
    var vm = this;
    vm.authentication = Authentication;
    About.content = $sce.trustAsHtml(About.content);
    vm.about = About;

    // Edit existing about
    vm.edit = function(about) {
      $state.go('about.edit', {
        'aboutId': about._id
      });
    };

    // Remove existing about
    vm.remove = function(about) {
      vm.about.$remove(function() {
        $location.path('about');
      });
    };
  }
})();
