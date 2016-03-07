(function() {
  'use strict';

  angular
    .module('articles')
    .controller('ArticleCreateController', ArticleCreateController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ArticleCreateController($location, $state, Authentication, $scope, Articles) {
    var vm = this;
    vm.authentication = Authentication;
    vm.create = function(isValid) {
      vm.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');
        return false;
      }

      // Create new Article object
      var article = new Articles({
        title: vm.article.title,
        content: vm.article.content
      });

      // Redirect after save
      article.$save(function(response) {
        $location.path('articles/' + response._id);

        // Clear form fields
        vm.article.title = '';
        vm.article.content = '';
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };
  }
})();
