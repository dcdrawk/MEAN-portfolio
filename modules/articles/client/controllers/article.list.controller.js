(function() {
  'use strict';

  angular
    .module('articles')
    .controller('ArticleListController', ArticleListController);

  // ArticleViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ArticleListController($location, $state, Authentication, $scope, articles) {
    var vm = this;
    vm.authentication = Authentication;
    vm.articles = articles;
  }
})();
