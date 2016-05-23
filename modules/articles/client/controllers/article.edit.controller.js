(function() {
  'use strict';

  angular
    .module('articles')
    .controller('ArticleEditController', ArticleEditController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ArticleEditController($location, $state, Authentication, article, $scope) {
    var vm = this;
    vm.authentication = Authentication;
    vm.article = article;

    // Update existing Article
    vm.update = function(isValid) {
      vm.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var article = vm.article;

      article.$update(function() {
        $location.path('articles/' + article._id);
      }, function(errorResponse) {
        vm.error = errorResponse.data.message;
      });
    };
  }
})();
