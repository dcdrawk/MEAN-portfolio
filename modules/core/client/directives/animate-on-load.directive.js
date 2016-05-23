'use strict';

angular.module('core').directive('animateOnLoad', ['$animateCss', function($animateCss) {
  return {
    'link': function(scope, element) {
      $animateCss(element, {
        'event': 'enter',
        structural: true
      }).start();
    }
  };
}]);
