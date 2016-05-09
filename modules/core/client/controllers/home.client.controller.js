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
  function HomeController($scope, $sce, Authentication, aboutInfo) {
    var vm = this;
  //  aboutInfo[0].intro = $sce.trustAsHtml(aboutInfo[0].intro);
   vm.aboutInfo = aboutInfo[0];
    
//    vm.aboutInfo.intro = 'dwadadwa';
//    console.log(vm.aboutInfo.intro);
    vm.aboutInfo.intro = $sce.trustAsHtml(vm.aboutInfo.intro);
    vm.editing = false;
    vm.authentication = Authentication;
    //    console.log(aboutInfo);
    //    $scope.authentication = Authentication;

    activate();

    vm.editAbout = function () {
      vm.editing = !vm.editing;
    };

    vm.saveAbout = function (isValid) {
//      vm.aboutInfo.intro = $sce.trustAsHtml(vm.aboutInfo.intro);
      console.log(vm.aboutInfo.intro.valueOf());
      vm.aboutInfo.intro = $sce.trustAsHtml(vm.aboutInfo.intro.valueOf());
      
      vm.aboutInfo.intro = vm.aboutInfo.intro.valueOf();
      console.log(vm.aboutInfo.intro);
      

      vm.error = null;
//      if (!isValid) {
//        $scope.$broadcast('show-errors-check-validity');
//        return false;
//      }
      var about = vm.aboutInfo;
      about.$update(function() {
        console.log('about updated');
        vm.editAbout();
        vm.aboutInfo.intro = $sce.trustAsHtml(vm.aboutInfo.intro);
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