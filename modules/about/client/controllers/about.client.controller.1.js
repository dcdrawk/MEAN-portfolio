(function() {
  'use strict';

  angular
    .module('about')
    .controller('AboutController', AboutController);

  // aboutController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutController($location, Authentication, About) {
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

      // Create new About object
      var about = new About({
        title: vm.title,
        content: vm.content
      });

      // Redirect after save
      about.$save(function (response) {
        $location.path('about/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

    activate();

    function activate() {
      vm.aboutList = About.query();
    }
  }
})();
