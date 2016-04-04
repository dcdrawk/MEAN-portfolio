(function() {
  'use strict';

  angular
    .module('contact')
    .controller('ContactViewController', ContactViewController);

  // ContactViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactViewController($location, $state, Authentication, contact, $sce) {
    var vm = this;
    vm.authentication = Authentication;
    contact.content = $sce.trustAsHtml(contact.content);
    vm.contact = contact;

    // Edit existing contact
    vm.edit = function(contact) {
      $state.go('contact.edit', {
        'contactId': contact._id
      });
    };

    // Remove existing contact
    vm.remove = function(contact) {
      vm.contact.$remove(function() {
        $location.path('contact');
      });
    };
  }
})();
