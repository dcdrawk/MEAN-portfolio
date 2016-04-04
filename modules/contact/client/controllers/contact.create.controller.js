(function() {
  'use strict';

  angular
    .module('contact')
    .controller('ContactCreateController', ContactCreateController);

  // ContactController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactCreateController($location, Authentication, Contact) {
    var vm = this;
    vm.authentication = Authentication;
    vm.contact = {};

    vm.create = function (isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Contact object
      // var contact = new Contact({
      //   title: vm.title,
      //   content: vm.content,
      //
      // });

      var contact = new Contact(vm.contact);

      // Redirect after save
      contact.$save(function (response) {
        $location.path('contact/' + response._id);

        // Clear form fields
        vm.contact = {};
        // vm.email = '';
        // vm.phone = '';
        // vm.address = '';
        // vm.facebook = '';
        // vm.linkedIn = '';
        // vm.linkedIn = '';
        // vm.linkedIn = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

  }
})();
