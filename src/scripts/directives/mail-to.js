'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.mailto');
  } catch (e) {
    module = angular.module('awelzijn.mailto', []);
  }
  module.directive('aWelzijnMailTo', [function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<a ng-show="emailAdres" href="mailto:{{emailAdres}}">{{emailAdres}}</a><span ng-show="!emailAdres">-</span>',
      scope: {
        emailAdres: "="
      },
			link: function (scope, element, attrs) {
        
      }
    }
  }]);
})();
