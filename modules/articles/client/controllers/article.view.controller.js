(function() {
  'use strict';

  angular
    .module('articles')
    .controller('ArticleViewController', ArticleViewController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ArticleViewController($location, $state, Authentication, article) {
    var vm = this;
    vm.authentication = Authentication;
    vm.article = article;

    // Edit existing Article
    vm.edit = function(article) {
      console.log(article);
      $state.go('articles.edit', {
        'articleId': article._id
      });
    };

    // Remove existing Article
    vm.remove = function(article) {
      if (article) {
        article.$remove();
        for (var i in $scope.articles) {
          if ($scope.articles[i] === article) {
            $scope.articles.splice(i, 1);
          }
        }
      } else {
        vm.article.$remove(function() {
          $location.path('articles');
        });
      }
    };
  }
})();
