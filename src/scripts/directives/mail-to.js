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
      template: '<a href="mailto:{{emailAdres}}">{{emailAdres}}</a>',
      scope: {
        emailAdres: "="
      }
    }
  }]);
})();
