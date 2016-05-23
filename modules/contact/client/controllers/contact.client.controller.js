(function() {
  'use strict';

  angular
    .module('contact')
    .controller('ContactController', ContactController);

  // ContactController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactController($location, Authentication, Contact) {
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

      // Create new Contact object
      var contact = new Contact({
        title: vm.title,
        content: vm.content
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

    activate();

    function activate() {
      vm.contactList = Contact.query();
    }
  }
})();
