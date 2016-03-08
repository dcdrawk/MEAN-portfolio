'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', '$timeout', '$rootScope',
  function($scope, $state, Authentication, Menus, $timeout, $rootScope) {

    //When the state changes, update the selected tab
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $scope.currentState = toState.name;
    });

    // $timeout(function() {
    //   $scope.currentState = $state.$current.name;
    //   console.log($scope.currentState + '50');
    // }, 50);
    //
    // $timeout(function() {
    //   $scope.currentState = $state.$current.name;
    //   console.log($scope.currentState + '250');
    // }, 250);
    //
    // $timeout(function() {
    //   $scope.currentState = $state.$current.name;
    //   console.log($scope.currentState + '500');
    // }, 500);
    //

    //Open the user menu
    $scope.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function() {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function() {
      $scope.isCollapsed = false;
    });

    $scope.go = function(state) {
      $state.go(state);
    };
  }
]);
