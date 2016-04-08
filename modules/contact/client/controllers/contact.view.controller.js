(function () {
  'use strict';

  angular
    .module('contact')
    .controller('ContactViewController', ContactViewController);

  // ContactViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactViewController($location, $state, Authentication, contactList, Contact) {
    var vm = this;
    vm.authentication = Authentication;
    vm.contact = contactList[0];

    vm.create = function (isValid, item) {
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
      contact.$save(function (response) {
        $location.path('contact/' + response._id);

        // Clear form fields
        vm.title = '';
        vm.content = '';
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };
    // Edit existing contact
    //    vm.edit = function(contact) {
    //      $state.go('contact.edit', {
    //        'contactId': contact._id
    //      });
    //    };
    //
    //    // Remove existing contact
    //    vm.remove = function(contact) {
    //      vm.contact.$remove(function() {
    //        $location.path('contact');
    //      });
    //    };
  }
})();