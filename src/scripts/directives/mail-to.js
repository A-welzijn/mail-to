'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.mail-to');
  } catch (e) {
    module = angular.module('awelzijn.mail-to', []);
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
