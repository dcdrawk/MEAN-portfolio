(function() {
  'use strict';

  angular
    .module('contact')
    .controller('ContactListController', ContactListController);

  // ContactController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactListController($location, Authentication, contactList, Contact, $timeout) {
    var vm = this;
    vm.authentication = Authentication;
    vm.contact = contactList[0];

    vm.create = function(isValid, item) {
      vm.error = null;

      // if (!isValid) {
      //   vm.$broadcast('show-errors-check-validity', 'articleForm');
      //
      //   return false;
      // }

      // Create new Contact object
      var contact = new Contact({
        position: vm.position,
        company: vm.company,
        date: vm.date,
        role: vm.role,
        result: vm.result,
      });

      // Redirect after save
      contact.$save(function(response) {
        $location.path('contact/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };

  }
})();
