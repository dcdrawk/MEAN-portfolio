// 'use strict';
//
// angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'experienceList',
//   function ($scope, Authentication, experienceList) {
//     console.log(experienceList);
//     // This provides Authentication context.
//     $scope.authentication = Authentication;
//   }
// ]);

(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  // HomeController.$inject = ['dependencies'];

  /* @ngInject */
  function HomeController($scope, Authentication, aboutInfo) {
    var vm = this;
    vm.aboutInfo = aboutInfo[0];
    vm.editing = false;
    vm.authentication = Authentication;
    //    console.log(aboutInfo);
    //    $scope.authentication = Authentication;

    activate();

    vm.editAbout = function () {
      vm.editing = !vm.editing;
    };

    vm.saveAbout = function (isValid) {
      vm.error = null;
//      if (!isValid) {
//        $scope.$broadcast('show-errors-check-validity');
//        return false;
//      }
      var about = vm.aboutInfo;
      about.$update(function() {
        console.log('about updated');
        vm.editAbout();
      }, function (errorResponse) {
        vm.error = errorResponse.data.message;
      });
      
    };

//    vm.update = function (isValid) {
//      // console.log('dwjiaodjiaod');
//      vm.error = null;
//
//      if (!isValid) {
//        $scope.$broadcast('show-errors-check-validity', 'portfolioForm');
//        return false;
//      }
//
//      var portfolio = vm.portfolio;
//
//      portfolio.$update(function () {
//        $location.path('portfolio/' + portfolio._id);
//      }, function (errorResponse) {
//        vm.error = errorResponse.data.message;
//      });
//    };

    function activate() {

    }
  }
})();