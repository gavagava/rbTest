'use strict';

angular.module('myApp', ['rbTest.mailbox'])
    .controller('MyAppBaseCtrl', ['$scope', function ($scope) {
      $scope.addEmails = function () {
        var ctrl = angular.element(document.querySelector('#ee1')).controller('emailEditor');
        ctrl.makeBlocks('test');
      };
      $scope.getEmailsCount = function () {
        var ctrl = angular.element(document.querySelector('#ee1')).controller('emailEditor');
        alert(ctrl.getMailsCount());
      };
    }]);
