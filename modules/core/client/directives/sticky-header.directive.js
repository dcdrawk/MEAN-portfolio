// //A modified version of the example found at http://codepen.io/DDN-Shep/pen/RNjPqe
// 'use strict';
// angular
//   .module('core')
//   .directive('ddnStickyWrapper', ['$window', function($window) {
//     var stickies = [],
//       scroll = function scroll() {
//         angular.forEach(stickies, function($sticky, index) {
//           var sticky = $sticky[0],
//             pos = $sticky.data('pos');
//
//           if (pos <= $window.pageYOffset) {
//
//             // var $next = stickies[index + 1];
//             var $next = stickies[index + 1] ? stickies[index + 1] : stickies[index];
//
//             var next = $next ? $next[0] : null;
//             var npos = $next.data('pos');
//
//             $sticky.addClass('fixed');
//
//             if (next && next.offsetTop >= npos - next.clientHeight)
//               $sticky.addClass('absolute').css('top', npos - sticky.clientHeight + 'px');
//           } else {
//             var $prev = stickies[index - 1],
//               prev = $prev ? $prev[0] : null;
//
//             $sticky.removeClass('fixed');
//
//             if (prev && $window.pageYOffset <= pos - prev.clientHeight)
//               $prev.removeClass('absolute').removeAttr('style');
//           }
//         });
//       },
//       compile = function compile(element, attrs, transclude) {
//         return function($scope, element, attrs) {
//           var sticky = element.children()[0],
//             $sticky = angular.element(sticky);
//
//           element.css('height', sticky.clientHeight + 'px');
//
//           $sticky.data('pos', sticky.offsetTop);
//           stickies.push($sticky);
//         };
//       },
//       link = function($scope, element, attrs) {
//         var sticky = element.children()[0],
//           $sticky = angular.element(sticky);
//
//         element.css('height', sticky.clientHeight + 'px');
//
//         $sticky.data('pos', sticky.offsetTop);
//         stickies.push($sticky);
//       };
//
//     angular.element($window).off('scroll', scroll).on('scroll', scroll);
//
//     return {
//       restrict: 'E',
//       transclude: true,
//       template: '<ddn-sticky ng-transclude></ddn-sticky>',
//       link: link
//     };
//   }]);
