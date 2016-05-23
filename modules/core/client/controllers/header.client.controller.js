'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', '$timeout', '$rootScope', '$document',
  function($scope, $state, Authentication, Menus, $timeout, $rootScope, $document) {

    //When the state changes, update the selected tab
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      // if(toState.name.indexOf('.') > 0) {
      //   var nestedIndex = toState.name.indexOf('.');
      //   var parentState = toState.name.slice(0, nestedIndex);
      //   $scope.currentState = parentState + '.list';
      // } else {
      console.log(toState);
      $scope.currentState = angular.copy(toState.name);
      // }
    });

    // $scope.setActiveTab = function(itemState, currentState) {
    //   if(!itemState || !currentState) {
    //     return;
    //   }
    //   var itemIndex = itemState.indexOf('.');
    //   var parentItemState =  itemState.slice(0, itemIndex);
    //
    //   var currentIndex = currentState.indexOf('.');
    //   var parentCurrentState =  currentState.slice(0, currentIndex);
    //
    //   if(itemState && currentState && parentItemState === parentCurrentState) {
    //     // return true;
    //   } else {
    //     // return false;
    //   }
    // };


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
    var navBar = document.getElementById('navigation-bar');
    //Open the user menu
    $scope.openMenu = function($mdOpenMenu, ev) {
      $mdOpenMenu(ev);
    };
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Get the account menu
    $scope.accountMenu = Menus.getMenu('account').items[0];

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
